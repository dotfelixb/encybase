using Microsoft.AspNetCore.Mvc.Rendering;

namespace Ency.Server.Extensions
{
    public static class MvcExtensions
    {
        public static string ActiveClass(this IHtmlHelper htmlHelper
        , string? controllers = null
        , string? actions = null)
        {
            var currentController = htmlHelper?.ViewContext.RouteData.Values["controller"] as string;
            var currentAction = htmlHelper?.ViewContext.RouteData.Values["action"] as string;

            var acceptedControllers = (controllers ?? currentController ?? "").Split(',');
            var acceptedActions = (actions ?? currentAction ?? "").Split(',');

            return acceptedControllers.Contains(currentController) && acceptedActions.Contains(currentAction)
                ? "border-social-100"
                : "border-transparent";
        }
    }
}
