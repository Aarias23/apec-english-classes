$ErrorActionPreference = "Stop"

$projectRoot = Split-Path -Parent $MyInvocation.MyCommand.Path
$distRoot = Join-Path $projectRoot "dist"
$serverRoot = Join-Path $distRoot "server"
$clientRoot = Join-Path $distRoot "client"
$clientAssets = Join-Path $clientRoot "assets"

New-Item -ItemType Directory -Force -Path $serverRoot, $clientAssets | Out-Null

Copy-Item -LiteralPath (Join-Path $projectRoot "worker\static-worker.js") -Destination (Join-Path $serverRoot "index.js") -Force
Copy-Item -LiteralPath (Join-Path $projectRoot "course-hub.html") -Destination (Join-Path $clientRoot "index.html") -Force
Copy-Item -LiteralPath (Join-Path $projectRoot "course-hub.html") -Destination (Join-Path $clientRoot "course-hub.html") -Force
Copy-Item -LiteralPath (Join-Path $projectRoot "classroom.html") -Destination $clientRoot -Force
Copy-Item -LiteralPath (Join-Path $projectRoot "unit2-class.html") -Destination $clientRoot -Force
Copy-Item -LiteralPath (Join-Path $projectRoot "midterm-review.html") -Destination $clientRoot -Force

$examSource = Join-Path $projectRoot "exam-english2"
if (Test-Path -LiteralPath $examSource) {
  Copy-Item -LiteralPath $examSource -Destination $clientRoot -Recurse -Force
}

$siteAssets = @(
  "site.css",
  "lesson-data.js",
  "book-map.js",
  "learning-components.js",
  "unit2-enhanced.js",
  "unit3-content.js",
  "hub.js",
  "classroom.js",
  "review.js"
)
foreach ($asset in $siteAssets) {
  Copy-Item -LiteralPath (Join-Path $projectRoot "assets\$asset") -Destination $clientAssets -Force
}

$bookSource = Join-Path $projectRoot "assets\book"
if (Test-Path -LiteralPath $bookSource) {
  Copy-Item -LiteralPath $bookSource -Destination $clientAssets -Recurse -Force
}

Write-Output "Static classroom site built in dist."
