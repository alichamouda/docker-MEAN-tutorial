
make-backend-image:
	docker build -t feedback-backend ./feedback-backend/

start-services:
	docker stack deploy --compose-file docker-compose.yml stack-feedback

check-services:
	docker stack services stack-feedback

run-all: | make-backend-image start-services