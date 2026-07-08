from django.urls import path
from .views import (
    DepartmentList,
    DoctorList,
    DoctorDetail,
    AppointmentListCreate,
    ContactListCreate,
)

urlpatterns = [
    path("departments/", DepartmentList.as_view(), name="departments"),
    path("doctors/", DoctorList.as_view(), name="doctors"),
    path("doctors/<int:pk>/", DoctorDetail.as_view(), name="doctor-detail"),
    path("appointments/", AppointmentListCreate.as_view(), name="appointments"),
    path("contact/", ContactListCreate.as_view(), name="contact"),
]