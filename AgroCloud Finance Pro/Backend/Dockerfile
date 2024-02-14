FROM maven:3.8.5-openjdk AS build
COPY . .
RUN mvn clean package -DskipTests

#------------

FROM openjdk:17.0.1-jdk-slim
COPY --from=build /target/harith-0.0.1-SNAPSHOT.jar deploy.jar
EXPOSE 8080
ENTRYPOINT ["java", "-jar", "deploy.jar"]