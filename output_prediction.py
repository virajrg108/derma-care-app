#!/usr/bin/env python
# coding: utf-8

# In[295]:


from keras.models import load_model
model = load_model('model.h5')
import os
os.environ['TF_CPP_MIM_LOG_LEVEL']='3'


# In[296]:


import pandas as pd


# In[297]:


data=[]


# In[298]:


df=pd.DataFrame(data,index=[0] ,columns=['dx_type','localization','image','sex','age'])


# In[299]:


df


# In[300]:


df['dx_type'][0]="histo"


# In[301]:


df['localization']="ear"


# In[302]:


df['sex']="male"


# In[303]:


df['age']=80.0


# In[304]:


from IPython.display import Image
Image(filename="C:\\Users\\Utkarsh\\Unscript hachathon\\img.jpg",width=200,height=200)


# In[ ]:





# In[305]:

from PIL import Image


# In[306]:


im=Image.open('C:\\Users\\Utkarsh\\Unscript hachathon\\img.jpg','r')


# In[307]:


import numpy as np


# In[308]:


df['image'][0]=np.asarray(im.resize((100,75)))


# In[309]:


df['image'][0][0][0].size


# In[310]:


df['image'].size


# In[326]:


sum = 0
# x = range(0, df['image'][0].size, 10)
# for n in x:
#     for m in range(0, 200, 10):
#         for k in range(0, 3, 1):
#             print(df['image'][n][m][k][0])
# print(sum)
#img = Image.open('HAM10000_images_part_1/ISIC_0025030.jpg').load()
# img = np.array(im)
# get shape
# w,h,d = img.shape
# # change shape
# img.shape = (w*h, d)
# get average
# print(tuple(np.average(im, axis=0)))


# In[327]:





# In[312]:


x_test = np.asarray(df['image'].tolist())


# In[313]:


x_test_mean = np.mean(x_test)
x_test_std = np.std(x_test)


# In[314]:


x_test = (x_test - x_test_mean)/x_test_std


# In[315]:


x_test = x_test.reshape(x_test.shape[0], *(75, 100, 3))


# In[316]:


Y_pred=model.predict(x_test)


# In[317]:


Y_pred_classes=np.argmax(Y_pred,axis = 1) 


# In[318]:


Y_pred_classes


# In[320]:


Y_pred_classes[0]


# In[ ]:

if (Y_pred_classes[0]==0):
    print("Actiny Kerotosis")
elif (Y_pred_classes[0]==1):
    print("Basal cell carcinoma")
elif (Y_pred_classes[0]==2):
    print("Benign keratoses-like lesions")
elif (Y_pred_classes[0]==3):
    print("dermatofibroma")
elif (Y_pred_classes[0]==4):
    print("Melanocytic nervi")
elif (Y_pred_classes[0]==5):
    print("Melanoma")
elif (Y_pred_classes[0]==6):
    print("vascular lesions")


