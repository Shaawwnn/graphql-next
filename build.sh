start_time=$(date +%s)

echo "🚀 Running build script..."

npm run generate

next build

end_time=$(date +%s)
elapsed=$(( end_time - start_time ))

echo "✨ Build completed in $elapsed seconds"



