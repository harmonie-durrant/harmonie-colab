#!/bin/bash

# Exit immediately if a command exits with a non-zero status.
set -e

# Find the docker-compose.yml file in the same directory as the script.
COMPOSE_FILE="$(dirname "$0")/docker-compose.yml"

if [ ! -f "$COMPOSE_FILE" ]; then
    echo "Error: docker-compose.yml not found in script directory."
    exit 1
fi

# Get all container names from the docker-compose file.
# This uses grep to find lines with container_name and awk to get the second field.
CONTAINER_NAMES=$(grep "container_name:" "$COMPOSE_FILE" | awk '{print $2}')

if [ -z "$CONTAINER_NAMES" ]; then
    echo "No containers with 'container_name' found in $COMPOSE_FILE."
    exit 1
fi

echo "Checking status of containers..."

for name in $CONTAINER_NAMES; do
    # docker ps --filter "name=^/${name}$" checks for an exact match of the container name.
    # --format "{{.Status}}" outputs only the status column.
    status=$(docker ps --filter "name=^/${name}$" --format "{{.Status}}")

    if [ -z "$status" ]; then
        echo "❌ Container '$name' does not exist."
        exit 1
    elif [[ ! "$status" =~ ^Up ]]; then
        echo "❌ Container '$name' is not running. Current status: $status"
        exit 1
    else
        echo "✅ Container '$name' is running."
    fi
done

echo "All containers are up and running."
exit 0
