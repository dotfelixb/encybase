using Ency.UIComponents.ViewComponents.Models;
using Microsoft.AspNetCore.Mvc;

namespace Ency.UIComponents.ViewComponents.Components.NavLinkButton;

public class NavLinkButton : ViewComponent
{
    public async Task<IViewComponentResult> InvokeAsync(string href, string label, string iconName) 
        => await Task.Run(() => View(new NavLinkModel { Href = href, Label = label, IconName = iconName }));
}