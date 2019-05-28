FROM maven:3.6.0-jdk-11-slim

ARG APLICATIVO
ENV APLICATIVO=${APLICATIVO}

COPY . /tmp/source
WORKDIR /tmp/source
RUN mvn clean package

RUN mkdir -p /app/config; \
	cp target/$APLICATIVO*.jar /app/$APLICATIVO.jar; \
	rm -rf /tmp/source; \
	mkdir /logs;

WORKDIR /app
ENTRYPOINT java -jar $APLICATIVO.jar