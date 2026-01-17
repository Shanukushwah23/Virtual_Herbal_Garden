FROM eclipse-temurin:17-jre-jammy

WORKDIR /app

# Sirf dist folder copy karo
COPY Virtual_Herbal_Garden/dist ./dist

EXPOSE 8080

CMD ["java", "-jar", "dist/Virtual_Herbal_Garden.jar"]
