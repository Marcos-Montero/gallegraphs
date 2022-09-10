FROM openjdk:17.0.2-jdk
EXPOSE 8080
ADD target/*.jar .
RUN mv *.jar app.jar
CMD exec java -jar app.jar
