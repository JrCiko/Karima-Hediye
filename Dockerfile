# ASP.NET 8 runtime
FROM mcr.microsoft.com/dotnet/aspnet:8.0
WORKDIR /app

# Render/Platform portunu dinle
ENV ASPNETCORE_URLS=http://0.0.0.0:8080

# Publish edilmiş dosyaları kopyala (dll, json'lar, wwwroot, vs.)
COPY . .

# DLL adın .csproj ile birebir aynı olmalı
ENTRYPOINT ["dotnet","Guzelime_Hediye.dll"]
