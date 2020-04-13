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
<img src='./markdown_img/overview.png' style="border:1px">

#### Tools Overview
- <img src='./markdown_img/pen.png'   style="float:left">&nbsp;pencil
- <img src='./markdown_img/line.png'  style="float:left">&nbsp;line
- <img src='./markdown_img/spray.png' style="float:left">&nbsp;spray brush
- <img src='./markdown_img/cir.png'   style="float:left">&nbsp;circle
- <img src='./markdown_img/rect.png'  style="float:left">&nbsp;rectangle
- <img src='./markdown_img/tri.png'   style="float:left">&nbsp;triangle
- <img src='./img/rubber_mouse.png'   style="float:left">&nbsp;eraser
- <img src='./markdown_img/text2.png' style="float:left">&nbsp;text
- <img src='./markdown_img/img.png'   style="float:left">&nbsp;load image
- <img src='./markdown_img/refresh.png' style="float:left">&nbsp;claer all
- <img src='./markdown_img/undo.png'  style="float:left">&nbsp;undo
- <img src='./markdown_img/redo.png'  style="float:left">&nbsp;redo
- <img src='./markdown_img/save2.png' style="float:left">&nbsp;save


#### Basic Tools Effect
You can choice tools wanted in the tool bar on the left. The blue frame will show the active tool. And the cursor will switch to corresponded icon.

<img src='./img/pen_mouse.png' style="float:left">&nbsp;pencil:  
&emsp;&ensp; Default tool at the beginning, you can draw line on the canvas with it.


<img src='./img/cir_mouse.png'   style="float:left">&nbsp;circle  
&emsp;&ensp; Draw circles with radius from the first click to mouseup.

<img src='./img/rec_mouse.png'  style="float:left">&nbsp;rectangle  
&emsp;&ensp; Draw rectangles from the first click to mouseup.

<img src='./img/tri_mouse.png'   style="float:left">&nbsp;triangle  
&emsp;&ensp; Draw triangles from the first click to mouseup with base on the x-axis movement and height on the y-axis movement.

<img src='./img/rubber_mouse.png'   style="float:left">&nbsp;eraser  
&emsp;&ensp; Clean any drawing on the canvas.
> <img src='./markdown_img/slider.png' style="float:left">&nbsp; width slider  
>
>  &emsp;&ensp; You can adjust the width of pencil and eraser on the right slider.

<img src='./markdown_img/text2.png' style="float:left">&nbsp;text  
&emsp;&ensp; Put text on the canvas. 
> <img src='./markdown_img/font_menu.png' style="float:left">&nbsp; font menu  
>
>  &emsp;&ensp; You can choose different text size and style on the right menu.

> <img src='./markdown_img/color.png' style="float:right">
> <img src='./markdown_img/palette.png' style="float:left">&nbsp;color selector  
>
>  &emsp;&ensp; All tools above can change to different color by the color selector on the right menu. You can choose any color then text or paint with it.
<br />  
<br />  
<br />  

<img src='./markdown_img/img.png'   style="float:left">&nbsp; load image:  
&emsp;&ensp; Load images you choose onto the canvas, and the canvas will be changed to the size of loaded image. More, still can paint,text,erase on the image.

<img src='./markdown_img/undo.png'  style="float:left">&nbsp;undo  / <img src='./markdown_img/redo.png'  style="overflow:auto">&nbsp;redo  
&emsp;&ensp; Reverse any mistake by "undo" or re-apply by "redo".

<img src='./markdown_img/refresh.png' style="float:left">&nbsp;claer all  
&emsp;&ensp; Return to the beginning canvas. However, if you click it accidently, you can still go back to the last paint by "undo".

<img src='./markdown_img/save2.png' style="float:left">&nbsp;save  
&emsp;&ensp; You can save you gorgeous painting by clicking this button, then the canvas will be saved to ./download as "MyGorgeousCanvas.png".


### Function description

    Decribe your bouns function and how to use it.

### Gitlab page link

https://107062108.gitlab.io/AS_01_WebCanvas

### Others (Optional)

Enjoy the Canvas :)

<style>
table th{
    width: 100%;
}
</style>