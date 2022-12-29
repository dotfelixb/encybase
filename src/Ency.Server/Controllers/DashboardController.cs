using Microsoft.AspNetCore.Mvc;

namespace Ency.Server.Controllers;

public class DashboardController : Controller
{
    private readonly ILogger<DashboardController> _logger;

    public DashboardController(ILogger<DashboardController> logger)
    {
        _logger = logger;
    }

    public IActionResult Index()
    {
        _logger.LogInformation($"{Request.Method}::{nameof(DashboardController)}::{nameof(Index)}");
        return View();
    }
}

public class BankController : Controller
{
    private readonly ILogger<BankController> _logger;

    public BankController(ILogger<BankController> logger)
    {
        _logger = logger;
    }

    public IActionResult Index()
    {
        _logger.LogInformation($"{Request.Method}::{nameof(BankController)}::{nameof(Index)}");
        return View();
    }
}

public class SalesController : Controller
{
    private readonly ILogger<SalesController> _logger;

    public SalesController(ILogger<SalesController> logger)
    {
        _logger = logger;
    }

    public IActionResult Index()
    {
        _logger.LogInformation($"{Request.Method}::{nameof(SalesController)}::{nameof(Index)}");
        return View();
    }
}

public class ExpensesController : Controller
{
    private readonly ILogger<ExpensesController> _logger;

    public ExpensesController(ILogger<ExpensesController> logger)
    {
        _logger = logger;
    }

    public IActionResult Index()
    {
        _logger.LogInformation($"{Request.Method}::{nameof(ExpensesController)}::{nameof(Index)}");
        return View();
    }
}

public class PayrollController : Controller
{
    private readonly ILogger<PayrollController> _logger;

    public PayrollController(ILogger<PayrollController> logger)
    {
        _logger = logger;
    }

    public IActionResult Index()
    {
        _logger.LogInformation($"{Request.Method}::{nameof(PayrollController)}::{nameof(Index)}");
        return View();
    }
}