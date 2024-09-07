from rest_framework.decorators import api_view
from rest_framework.response import Response

@api_view(['GET'])
def candlestick_data(request):
    data = {
        "data": [
            {"x": "2023-01-01", "open": 30, "high": 40, "low": 25, "close": 35},
            {"x": "2023-01-02", "open": 35, "high": 45, "low": 30, "close": 40},
            {"x": "2023-01-03", "open": 12, "high": 60, "low": 10, "close": 51},
            {"x": "2023-01-04", "open": 46, "high": 52, "low": 30, "close": 38},
            {"x": "2023-01-05", "open": 38, "high": 40, "low": 24, "close": 26},
            {"x": "2023-01-06", "open": 38, "high": 40, "low": 24, "close": 26},
        ]
    }
    return Response(data)

@api_view(['GET'])
def line_chart_data(request):
    data= {
        "labels": ["Jan", "Feb", "Mar", "Apr"],
        "data": [10, 20, 30, 40]
        }
    return Response(data)

@api_view(['GET'])
def bar_chart_data(request):
    data = {
        "labels": ["Product A", "Product B", "Product C"],
        "data": [100, 150, 200]
        }
    return Response(data)

@api_view(['GET'])
def pie_chart_data(request):
    data =  {
        "labels": ["Red", "Blue", "Yellow"],
        "data": [300, 50, 100]
        }
    return Response(data)