import http from 'k6/http';
import { sleep } from "k6";
import { parseEnvInt, logContentType } from './utils.js';
import { performResponseChecks, performBodyChecks } from './checks.js';

// Default number of virtual users
const DEFAULT_VUS = 5;


// API endpoint to test
const API_URL = "https://swapi.dev/api/people/30/";

// Test configuration
export const options = {
  stages: [
    { duration: "5s", target: parseEnvInt("TARGET_VUS", DEFAULT_VUS) },  // Ramp-up
    { duration: "10s", target: parseEnvInt("TARGET_VUS", DEFAULT_VUS) }, // Steady state
    { duration: "5s", target: 0 }  // Ramp-down
  ]
};

export default function () {
  // Send GET request to the API
  const response = http.get(API_URL, {
    headers: { Accept: "application/json" }
  });
  
  // Log the received Content-Type for debugging
  logContentType(response);

  // Perform checks on the response
  performResponseChecks(response);
  
  // Parse the response body
  const body = JSON.parse(response.body);

  // Additional checks on the response body
  performBodyChecks(body);
  
  // Wait for 300ms before next iteration
  sleep(0.3);
}
