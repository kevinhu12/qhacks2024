# -*- coding: utf-8 -*-
"""Tensorflow.js model

Automatically generated by Colaboratory.

Original file is located at
    https://colab.research.google.com/drive/1Ts6PlxpaIQQTBHclLu_2EaN15tb6Dp9_
"""

import pandas as pd
import tensorflow as tf
from sklearn.model_selection import train_test_split
from sklearn.preprocessing import StandardScaler
import numpy as np
import random

# Load your dataset into a Pandas DataFrame
df = pd.read_excel('/content/Large_Synthetic_Dataset_Clean.xlsx')

# Separate the majority and minority classes
df_majority = df[df['Match?'] == 0]
df_minority = df[df['Match?'] == 1]

# Sample a subset from the majority class to balance the classes
df_majority_sampled = df_majority.sample(n=len(df_minority), random_state=42)

# Concatenate the sampled majority class with the minority class
df_balanced = pd.concat([df_majority_sampled, df_minority])

# Shuffle the rows to ensure randomness
df_balanced = df_balanced.sample(frac=1, random_state=42).reset_index(drop=True)

# Separate features (X) and target variable (y)
X = df_balanced.iloc[:, :-1]  # All columns except the last one
y = df_balanced.iloc[:, -1]   # Last column


# Preprocess the data
scaler = StandardScaler()
X_normalized = scaler.fit_transform(X)

# Split the dataset into training and testing sets
X_train, X_test, y_train, y_test = train_test_split(X_normalized, y, test_size=0.2, random_state=42)

# Build the model
model = tf.keras.Sequential([
    tf.keras.layers.Dense(64, activation='relu', input_shape=(X_train.shape[1],)),
    tf.keras.layers.Dense(32, activation='relu'),
    tf.keras.layers.Dense(1, activation='sigmoid')
])

# Compile the model
model.compile(optimizer='adam', loss='binary_crossentropy', metrics=['accuracy'])

# Train the model
model.fit(X_train, y_train, epochs=10, batch_size=32, validation_split=0.2)

# Evaluate the model on 10 test samples
sample_indices = np.random.choice(len(X_test), size=10, replace=False)
sample_X = X_test[sample_indices]
sample_y_true = y_test.iloc[sample_indices]

sample_y_pred = model.predict(sample_X).flatten().round()

for i in range(10):
    print(f"Sample {i+1}: True Label = {sample_y_true.iloc[i]}, Predicted Label = {sample_y_pred[i]}")

# Make predictions for a custom data point
custom_data_point = np.array([[1, 1, 1, 1,1,1,2000, 2200, 1200,1220]])  # Adjust this based on your data
custom_data_point_normalized = scaler.transform(custom_data_point)

custom_prediction = model.predict(custom_data_point_normalized).flatten().round()
print(f"Custom Data Point Prediction: {custom_prediction}")

# Evaluate the model
test_loss, test_accuracy = model.evaluate(X_test, y_test)
print(f'Test Accuracy: {test_accuracy}')

import shutil

# Save the model in TensorFlow SavedModel format
model.save('saved_model')

# Create a zip file containing the saved model
shutil.make_archive('saved_model_zip', 'zip', 'saved_model')

# Provide a download link
print("Download the model: [Download saved_model_zip.zip](path/to/saved_model_zip.zip)")