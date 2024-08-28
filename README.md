# k6 Load Testing with InfluxDB and Grafana 🚀📊

This project provides a comprehensive setup for load testing using k6, with results stored in InfluxDB and visualized in Grafana. It's designed to help you easily set up, run, and analyze load tests for your applications.

## Features

- 🔥 Automated load testing with k6
- 📊 Real-time data storage in InfluxDB
- 📈 Beautiful visualizations with Grafana
- 🐳 Containerized setup using Docker Compose
- 🛠 Customizable test scenarios and checks
- 📝 Detailed logging and error reporting
- 🔧 Configurable virtual users and test duration
- 🧰 Modular JavaScript code structure
- 🔄 Reusable utility functions and checks

## Project Structure

- `docker-compose.yml`: Defines the services (k6, InfluxDB, Grafana) and their configurations.
- `k6/`: Contains k6 test scripts and utilities.
  - `k6.js`: Main test script with configuration and test logic.
  - `utils.js`: Utility functions for parsing environment variables and logging.
  - `checks.js`: Reusable check functions for response validation.
- `grafana/`: Contains Grafana configuration files and dashboards.
  - `k6-load-testing-results_rev3.json`: Pre-configured Grafana dashboard for visualizing k6 results.
  - `grafana-datasource.yaml`: InfluxDB datasource configuration for Grafana.
  - `grafana-dashboard.yaml`: Dashboard provisioning configuration.
- `run.sh`: Bash script to easily start the load test and services.

## Getting Started

1. Ensure you have Docker and Docker Compose installed on your system.

2. Clone this repository:
   ```shell
   git clone https://github.com/tooniez/k6-grafana-influxdb.git
   cd k6-grafana-influxdb/
   ```

3. Run the load test:
   ```shell
   ./run.sh
   ```

4. Access the Grafana dashboard at `http://localhost:3000/d/k6/k6-load-testing-results`

## Customizing the Load Test

You can customize the load test by modifying the `k6/k6.js` file. Key areas to consider:

- Adjust the `options` object to change the number of virtual users and test duration.
- Modify the `API_URL` constant to test different endpoints.
- Add or modify checks in the `checks.js` file to validate different aspects of the response.

## Viewing Results

The Grafana dashboard provides a comprehensive view of your load test results, including:

- Request rate and response times
- Error rates and types
- Virtual user count over time
- Detailed percentiles (p90, p95) for response times

## License

📝 Copyright © 2024 [tooniez](https://github.com/tooniez). <br />
This project is [MIT](https://github.com/tooniez/k6-grafana-influxdb/blob/main/LICENSE) licensed.








