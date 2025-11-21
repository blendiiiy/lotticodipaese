# Script to find video files
Write-Host "Searching for video files..." -ForegroundColor Cyan

$videoFiles = Get-ChildItem -Path "public" -Recurse -Include *.mp4,*.mov,*.webm,*.avi -ErrorAction SilentlyContinue

if ($videoFiles.Count -eq 0) {
    Write-Host "No video files found in public folder." -ForegroundColor Yellow
    Write-Host "`nPlease add your video file to one of these locations:" -ForegroundColor Yellow
    Write-Host "  - public/videos/hero-video.mp4" -ForegroundColor Green
    Write-Host "  - public/videos/video.mp4" -ForegroundColor Green
    Write-Host "  - public/images/*.mp4" -ForegroundColor Green
} else {
    Write-Host "`nFound video files:" -ForegroundColor Green
    foreach ($file in $videoFiles) {
        Write-Host "  - $($file.FullName)" -ForegroundColor Cyan
        Write-Host "    Size: $([math]::Round($file.Length / 1MB, 2)) MB" -ForegroundColor Gray
    }
}

