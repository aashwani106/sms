using System.IO;
using System.Text.Json;
using Microsoft.Extensions.Options;

var builder = WebApplication.CreateBuilder(args);

builder.Services.AddCors(options =>
{
    options.AddPolicy("AllowAnyOrigin",
        builder =>
        {
            builder.AllowAnyOrigin()
                   .AllowAnyMethod()
                   .AllowAnyHeader();
        });
});

builder.Services.AddEndpointsApiExplorer();
builder.Services.AddSwaggerGen();

var app = builder.Build();

app.UseCors("AllowAnyOrigin");

app.MapGet("/a", () =>
{
    // Simulated data or data fetched from a database
    var responseData = new
    {
        message = "This is some data from the backend",
        value = 123,
        // Add more properties as needed
    };

    return Results.Ok(responseData);
});



app.Run();

