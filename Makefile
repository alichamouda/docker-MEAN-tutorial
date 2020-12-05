make-images:
	echo "BUILDING FRONT IMAGE....."
	docker build -t feedback-frontend ./feedback-app/
	echo "FRONT IMAGE BUILDED .....\n"
	echo "BUILDING BACK IMAGE....."
	docker build -t feedback-backend ./feedback-backend/
	echo "BACK IMAGE BUILDED .....\n"

make-hybrid:
	docker build -t feedback-hybrid ./

make-backend-image:
	echo "BUILDING BACK IMAGE....."
	docker build -t feedback-backend ./feedback-backend/
	echo "BACK IMAGE BUILDED .....\n"

run-compose:
	sudo docker-compose up -d 