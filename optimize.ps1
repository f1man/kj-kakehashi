Add-Type -AssemblyName System.Drawing
$sourceDir = "public\gallery"
$destDir = "public\gallery_optimized"

if (!(Test-Path -Path $destDir)) {
    New-Item -ItemType Directory -Path $destDir | Out-Null
}

$images = Get-ChildItem -Path $sourceDir -Include *.jpg,*.jpeg,*.png,*.gif -Recurse
foreach ($img in $images) {
    try {
        $original = [System.Drawing.Image]::FromFile($img.FullName)
        $newFileName = Join-Path $destDir $img.Name
        
        # Only resize if width > 800
        if ($original.Width -gt 800) {
            $ratio = 800.0 / $original.Width
            $newHeight = [int]($original.Height * $ratio)
            $newImage = New-Object System.Drawing.Bitmap(800, $newHeight)
            $graph = [System.Drawing.Graphics]::FromImage($newImage)
            $graph.InterpolationMode = [System.Drawing.Drawing2D.InterpolationMode]::HighQualityBicubic
            $graph.DrawImage($original, 0, 0, 800, $newHeight)
            
            $newImage.Save($newFileName, [System.Drawing.Imaging.ImageFormat]::Jpeg)
            $newImage.Dispose()
            $graph.Dispose()
            Write-Host "Resized and copied $($img.Name)"
        } else {
            # Just copy if it's already small
            $original.Save($newFileName, [System.Drawing.Imaging.ImageFormat]::Jpeg)
            Write-Host "Copied $($img.Name)"
        }
        $original.Dispose()
    } catch {
        Write-Host "Failed to process $($img.Name): $_"
    }
}
Write-Host "Done!"
