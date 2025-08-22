.PHONY: all clean fclean re verify

all: docker-build docker-up

docker-build:
	@echo "🐳 Creating Docker Images..."
	@docker compose build

docker-up:
	@echo "🚀 Starting Services..."
	@docker compose up -d

clean:
	@echo "🗑️ Stopping and removing containers..."
	@docker compose down
	@docker system prune -f
	@echo "✅ Docker cleaned."

clean-db:
	@echo "🗑️ Removing database..."
	@sudo rm -rf ./database/data
	@echo "✅ Database removed."

fclean: clean clean-db
	@echo "✅ Full clean complete."

re: clean all
	@echo "🔨 Rebuild complete..."

verify:
	@./verify.sh