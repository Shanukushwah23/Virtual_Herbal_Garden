# Use official OpenJDK
FROM openjdk:17-jdk-slim

# Set working directory
WORKDIR /app

# Copy all project files
COPY . .

# Build project using Ant
RUN apt-get update && \
    apt-get install -y ant && \
    ant

# Expose port (change if needed)
EXPOSE 8080

# Run the generated JAR
CMD ["java", "-jar", "dist/Virtual_Herbal_Garden.jar"]

