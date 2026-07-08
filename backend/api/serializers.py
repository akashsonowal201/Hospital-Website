from rest_framework import serializers
from .models import Department, Doctor, Appointment, Contact


class DepartmentSerializer(serializers.ModelSerializer):
    class Meta:
        model = Department
        fields = "__all__"


class DoctorSerializer(serializers.ModelSerializer):
    department_name = serializers.CharField(source="department.name", read_only=True)

    class Meta:
        model = Doctor
        fields = [
            "id",
            "name",
            "qualification",
            "experience",
            "available",
            "department",
            "department_name",
        ]


class AppointmentSerializer(serializers.ModelSerializer):
    doctor_name = serializers.CharField(source="doctor.name", read_only=True)

    class Meta:
        model = Appointment
        fields = "__all__"


class ContactSerializer(serializers.ModelSerializer):
    class Meta:
        model = Contact
        fields = "__all__"