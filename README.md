# Software Studio 2020 Spring
## Assignment 01 Web Canvas


### Scoring

| **Basic components**                             | **Score** | **Check** |
| :----------------------------------------------- | :-------: | :-------: |
| Basic control tools                              | 30%       | Y         |
| Text input                                       | 10%       | Y         |
| Cursor icon                                      | 10%       | Y         |
| Refresh button                                   | 10%       | Y         |

| **Advanced tools**                               | **Score** | **Check** |
| :----------------------------------------------- | :-------: | :-------: |
| Different brush shapes                           | 15%       | Y         |
| Un/Re-do button                                  | 10%       | Y         |
| Image tool                                       | 5%        | Y         |
| Download                                         | 5%        | Y         |

| **Other useful widgets**                         | **Score** | **Check** |
| :----------------------------------------------- | :-------: | :-------: |
| Name of widgets                                  | 1~5%     | N         |


---

### How to use 
#### Interface Overview
![](https://i.imgur.com/8OZDEnI.png)


#### Tools Overview
- ![](https://i.imgur.com/6I3N6Ur.png)&nbsp;pencil
- ![](https://i.imgur.com/Z6dV561.png)&nbsp;line
- ![](https://i.imgur.com/hEAPf9z.png)&nbsp;spray brush
- ![](https://i.imgur.com/vNoQiEs.png)&nbsp;circle
- ![](https://i.imgur.com/tbqkZVv.png)&nbsp;rectangle
- ![](https://i.imgur.com/4qOkKxG.png)&nbsp;triangle
- ![](https://i.imgur.com/YkKuYOJ.png)&nbsp;eraser
- ![](https://i.imgur.com/yWyz6EL.png)&nbsp;text
- ![](https://i.imgur.com/VblGnik.png)&nbsp;load image
- ![](https://i.imgur.com/ROwvU4Q.png)&nbsp;claer all
- ![](https://i.imgur.com/urpooDH.png)&nbsp;undo
- ![](https://i.imgur.com/9lNPCDf.png)&nbsp;redo
- ![](https://i.imgur.com/9WNKuF6.png)&nbsp;save


#### Basic Tools Effect
You can choice tools wanted in the tool bar on the left. The blue frame will show the active tool. And the cursor will switch to corresponding icon.

![](https://i.imgur.com/P7RJFSV.png)&nbsp;pencil:
&emsp;&ensp; Default tool at the beginning, you can draw line on the canvas with it.


![](https://i.imgur.com/YMSyza6.png)&nbsp;circle  
&emsp;&ensp; Draw circles with radius from the first click to mouseup.

![](https://i.imgur.com/ROVh4Yx.png)&nbsp;rectangle  
&emsp;&ensp; Draw rectangles from the first click to mouseup.

![](https://i.imgur.com/A5M6JGE.png)&nbsp;triangle  
&emsp;&ensp; Draw triangles from the first click to mouseup with base on the x-axis movement and height on the y-axis movement. So you can get a normal triangle while moving your mouse up, and get an inverted triangle while moving your mouse down.

![](https://i.imgur.com/gcCH2fn.png)&nbsp;eraser  
&emsp;&ensp; Clean any drawing on the canvas.
> ![](https://i.imgur.com/HYFNZfU.png)&nbsp; width slider  
>  You can adjust the width of pencil and eraser on the right slider. And the dot above will show the actually width.  
> ![](https://i.imgur.com/6N8nHmF.png)


![](https://i.imgur.com/um1VbRo.png)&nbsp;text  
&emsp;&ensp; Put text on the canvas. 
> ![](https://i.imgur.com/9DNib0t.png)&nbsp; font menu  
>  You can choose different text size and style on the right menu.  
> ![](https://i.imgur.com/QAPFNX1.png)


> ![](https://i.imgur.com/0Dh6Kes.png)&nbsp;color selector  
>  All tools above can change to different color by the color selector on the right menu. You can choose any color then text or paint with it.  
> ![](https://i.imgur.com/xy44lk8.png)

![](https://i.imgur.com/tg1Pa2F.png)&nbsp; load image:  
&emsp;&ensp; Get to load images you choose onto the canvas, and the canvas will be changed to the size of loaded image. More, still can paint,text,erase on the image. See the folowing image for overview.
> ![](https://i.imgur.com/6lLFXRK.png)


![](https://i.imgur.com/HPk7dVy.png)&nbsp;undo  / ![](https://i.imgur.com/nBgmBWQ.png)&nbsp;redo  
&emsp;&ensp; Reverse any mistake by "undo" or re-apply by "redo".

![](https://i.imgur.com/3x3jfcv.png)&nbsp;claer all  
&emsp;&ensp; Return to the beginning canvas. However, if you click it accidently, you can still go back to the last paint by "undo".

![](https://i.imgur.com/jWwlC9n.png)&nbsp;save  
&emsp;&ensp; You can save your gorgeous painting by clicking this button, then the canvas will be saved to ./download as "MyGorgeousCanvas.png".


### Function description
I have done 2 bouns functions -  line and spray gun.  

![](https://i.imgur.com/EYwywmp.png)&nbsp;line:  
&emsp;&ensp; Draw a straight line from the first click to mouseup. Can also change color and width by the selector and slider.

![](https://i.imgur.com/m6dCpEf.png)&nbsp;spray gun:  
&emsp;&ensp; Drawing as a spray gun. Achieved it by filling area around mouse point with random pixels. And since painting is a constant interval while the mouse is pressed. So I set up a timer. This way, certain areas can be made darker by "holding a spray" there longer. And it can also change color and width by the selector and slider. Get effect overview from the following image.  
> ![](https://i.imgur.com/CTsiTt1.png)


### Gitlab page link

https://107062108.gitlab.io/AS_01_WebCanvas

### Others (Optional)

Enjoy the Canvas :)

<style>
table th{
    width: 100%;
}
</style>