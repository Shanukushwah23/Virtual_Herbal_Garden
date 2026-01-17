FROM eclipse-temurin:17-jre-jammy

WORKDIR /app

# Copy dist folder
COPY Virtual_Herbal_Garden/dist ./dist

# Debug: show files (Render logs me dikhega)
RUN ls -l dist || true

EXPOSE 8080

# Auto-detect jar and run
CMD sh -c 'JAR=$(ls dist/*.jar 2>/dev/null | head -n 1) && echo "Running $JAR" && java -jar "$JAR"'
