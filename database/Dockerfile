FROM postgres:13

COPY init.sql /docker-entrypoint-initdb.d/
RUN chmod -R 755 /docker-entrypoint-initdb.d/