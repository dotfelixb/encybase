using Microsoft.AspNetCore.Mvc;

namespace Ency.UIComponents.ViewComponents.Components.TabPage;

public class TabPage : ViewComponent
{
    public async Task<IViewComponentResult> InvokeAsync() 
        => await Task.Run(() => View());
}
