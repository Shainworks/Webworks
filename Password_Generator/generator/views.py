from django.shortcuts import render
import random
# Create your views here.
def home(request):
            return render(request,'generator/home.html')

def password(request):
        characters = list('qwertyuiopasdfghjklzxcvbnm')
        if request.GET.get('UPPERCASE'):
            characters.extend(list('QWERTYUIOPASDFGHJKLZXCVBNM'))
        if request.GET.get('NUMBERS'):
            characters.extend(list('0123456789'))
        if request.GET.get('SPECIALCHARACTER'):
            characters.extend(list('!@#$%^&*()'))
        length = int(request.GET.get('length',12))
        thepassword = ''
        for x in range(length):
            thepassword+=random.choice(characters)
        return render(request,'generator/password.html',{'password':thepassword})

def about(request):
      return render(request,'generator/about.html')