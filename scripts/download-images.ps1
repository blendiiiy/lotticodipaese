# PowerShell script to download images from lotticodipaese.com
# Run this in PowerShell

$baseUrl = "https://www.lotticodipaese.com"
$outputDir = "public\images"

# Create directory if it doesn't exist
if (-not (Test-Path $outputDir)) {
    New-Item -ItemType Directory -Path $outputDir
    Write-Host "Created directory: $outputDir"
}

# Common image paths to try (you may need to adjust these based on actual site structure)
$imagePaths = @(
    "/wp-content/uploads/",
    "/images/",
    "/assets/images/",
    "/img/",
    "/media/",
    "/uploads/"
)

Write-Host "`n=== Image Downloader ===" -ForegroundColor Cyan
Write-Host "This script will help you download images from the website"
Write-Host "`nTo find actual image URLs:"
Write-Host "1. Open https://www.lotticodipaese.com/ in your browser"
Write-Host "2. Press F12 to open Developer Tools"
Write-Host "3. Go to Network tab, filter by 'Img'"
Write-Host "4. Refresh the page"
Write-Host "5. Right-click on images and 'Save as...'"
Write-Host "`nOr use the browser console script (download-images.js)"
Write-Host "`nPress any key to open the website..."
$null = $Host.UI.RawUI.ReadKey("NoEcho,IncludeKeyDown")

# Open the website
Start-Process "https://www.lotticodipaese.com/"

Write-Host "`nWebsite opened. Please download images manually and save them to: $outputDir" -ForegroundColor Yellow

