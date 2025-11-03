#!/bin/bash

# A simple script to calculate simple interest

# Usage: ./simple-interest.sh <principal> <rate> <time>
# Example: ./simple-interest.sh 1000 5 2

P=$1
R=$2
T=$3

# Calculate simple interest
# Note: 'bc' is used for floating-point arithmetic
SI=$(echo "scale=2; $P * $R * $T / 100" | bc)

# Calculate total amount
TOTAL=$(echo "scale=2; $P + $SI" | bc)

echo "Principal Amount: $P"
echo "Rate of Interest: $R%"
echo "Time (in years): $T"
echo "--------------------"
echo "Simple Interest: $SI"
echo "Total Amount: $TOTAL"
