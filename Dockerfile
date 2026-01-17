FROM eclipse-temurin:17-jdk-jammy

WORKDIR /app

# Copy project folder
COPY Virtual_Herbal_Garden/ Virtual_Herbal_Garden/

# Install ant
RUN apt-get update && apt-get install -y ant

# Change directory & build
WORKDIR /app/Virtual_Herbal_Garden
RUN ant

EXPOSE 8080

CMD ["java", "-jar", "dist/Virtual_Herbal_Garden.jar"]
