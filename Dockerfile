# Use official Java image
FROM openjdk:21-jdk-slim

# Set working directory
WORKDIR /app

# Copy project jar
COPY target/Virtual_Herbal_Garden.jar app.jar

# Expose port
EXPOSE 8080

# Start app
ENTRYPOINT ["java", "-jar", "app.jar"]
