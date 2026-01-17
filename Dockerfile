FROM eclipse-temurin:17-jdk-jammy

WORKDIR /app

COPY Virtual_Herbal_Garden/ Virtual_Herbal_Garden/

RUN apt-get update && apt-get install -y ant

WORKDIR /app/Virtual_Herbal_Garden

# Clean + build project
RUN ant clean || true
RUN ant jar || ant dist

EXPOSE 8080

CMD ["java", "-jar", "dist/Virtual_Herbal_Garden.jar"]
