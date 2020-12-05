

make-hybrid:
	docker build -t feedback-hybrid ./
make-backend-image:
	docker build -t feedback-backend ./feedback-backend/
make-frontend-image:
	docker build -t feedback-frontend ./feedback-app/

run-compose:
	sudo docker-compose up -d 

make-images: |	make-frontend-image	make-backend-image 	make-hybrid

run-all: | make-images run-compose