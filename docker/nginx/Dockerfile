FROM nginx:1.13.8

RUN rm -f /etc/nginx/conf.d/*
COPY ./docker/nginx/nginx.conf /etc/nginx/conf.d/GatherGram.conf

RUN mkdir /root/logs
RUN chmod 755 -R /root

ADD ./public/ /home/gashoo_admin/public/

CMD ["nginx", "-g", "daemon off;"]
