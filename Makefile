.DEFAULT_GOAL := help

start: ## Run docker for a project
	docker-compose up -d

stop: ## Stop all containers for a project
	docker-compose down --remove-orphans

bash: ## Exec bash for php container
	docker-compose exec node bash

kill-all: ## Kill all running containers
	docker container kill $$(docker container ls -q)

.PHONY: help
help:
	@grep -E '^[a-zA-Z_-]+:.*?## .*$$' $(MAKEFILE_LIST) | sort | awk 'BEGIN {FS = ":.*?## "}; {printf "\033[36m%-30s\033[0m %s\n", $$1, $$2}'
