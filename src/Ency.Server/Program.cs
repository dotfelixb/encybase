using Microsoft.Extensions.FileProviders;

var builder = WebApplication.CreateBuilder(args);

// Add services to the container.
builder.Services.AddControllersWithViews()
    .AddRazorOptions(options =>
    {
        options.ViewLocationFormats.Add("/ViewComponents/{0}.cshtml");
    })
    .AddRazorRuntimeCompilation((options) =>
    {
#if DEBUG
        var dirs = new[] { "Ency.UIComponents" };
        foreach (var dir in dirs)
        {
            var libPath = Path.GetFullPath(Path.Combine(builder.Environment.ContentRootPath, "..", dir));
            options.FileProviders.Add(new PhysicalFileProvider(libPath));
        }

#endif
    });

var app = builder.Build();

// Configure the HTTP request pipeline.
if (!app.Environment.IsDevelopment())
{
    app.UseExceptionHandler("/Home/Error");
}
app.UseStaticFiles();

app.UseRouting();

app.UseAuthorization();

app.MapControllerRoute(
    name: "default",
    pattern: "{controller=Dashboard}/{action=Index}/{id?}");

app.Run();