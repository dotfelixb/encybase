#See https://aka.ms/containerfastmode to understand how Visual Studio uses this Dockerfile to build your images for faster debugging.

FROM mcr.microsoft.com/dotnet/aspnet:7.0 AS base
WORKDIR /app
EXPOSE 80

FROM mcr.microsoft.com/dotnet/sdk:7.0 AS build
WORKDIR /src
COPY ["src/services/identity/Identity.App/Identity.App.csproj", "src/services/identity/Identity.App/"]
RUN dotnet restore "src/services/identity/Identity.App/Identity.App.csproj"
COPY . .
WORKDIR "/src/src/services/identity/Identity.App"
RUN dotnet build "Identity.App.csproj" -c Release -o /app/build

FROM build AS publish
RUN dotnet publish "Identity.App.csproj" -c Release -o /app/publish /p:UseAppHost=false

FROM base AS final
WORKDIR /app
COPY --from=publish /app/publish .
ENTRYPOINT ["dotnet", "Identity.App.dll"]