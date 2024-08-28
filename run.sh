#!/bin/bash

# Usage: ./run.sh
#
# Description:
# This script automates the process of running a k6 load test using Docker Compose.
# It starts InfluxDB and Grafana services, runs the k6 load test, and provides
# information on how to view the results. After completion, it offers to stop the services.
#
# Prerequisites:
# - Docker and Docker Compose installed
# - k6 script located at /scripts/k6.js
# - Appropriate Docker Compose configuration file in the same directory

# Start InfluxDB and Grafana in detached mode
echo "Starting InfluxDB and Grafana..."
docker compose up -d influxdb grafana

# Wait for services to be ready
echo "Waiting for services to be ready..."
sleep 5  # Adjust this value based on your system's performance

# Run k6 load test
echo "Running k6 load test..."
docker compose run --rm k6 run /scripts/k6.js

# Print dashboard information
echo "--------------------------------------------------------------------------------------"
echo "Load testing complete. View results at:"
echo "http://localhost:3000/d/k6/k6-load-testing-results"
echo "--------------------------------------------------------------------------------------"

# Offer to stop the services
read -p "Press Enter to stop the services, or Ctrl+C to keep them running..."
docker compose down
docker compose down influxdb grafana