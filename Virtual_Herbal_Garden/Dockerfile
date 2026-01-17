# Base image
FROM openjdk:17-jdk-slim

# App directory
WORKDIR /app

# Copy project
COPY . .

# Install Ant & build project
RUN apt-get update && \
    apt-get install -y ant && \
    ant

# Expose app port
EXPOSE 8080

# Run generated JAR
CMD ["java", "-jar", "dist/Virtual_Herbal_Garden.jar"]
