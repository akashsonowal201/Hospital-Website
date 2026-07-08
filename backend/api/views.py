from rest_framework import generics
from .models import Department, Doctor, Appointment, Contact
from .serializers import (
    DepartmentSerializer,
    DoctorSerializer,
    AppointmentSerializer,
    ContactSerializer,
)


class DepartmentList(generics.ListAPIView):
    queryset = Department.objects.all()
    serializer_class = DepartmentSerializer


class DoctorList(generics.ListAPIView):
    queryset = Doctor.objects.all()
    serializer_class = DoctorSerializer


class DoctorDetail(generics.RetrieveAPIView):
    queryset = Doctor.objects.all()
    serializer_class = DoctorSerializer


class AppointmentListCreate(generics.ListCreateAPIView):
    queryset = Appointment.objects.all().order_by("-created_at")
    serializer_class = AppointmentSerializer


class ContactListCreate(generics.ListCreateAPIView):
    queryset = Contact.objects.all().order_by("-created_at")
    serializer_class = ContactSerializer