import pygame as pg
import time
import random 
pg.init()
#Variables
width = 800
height = 700
running = True
red = (255,150,150)
blue = (150,150,255)
green = (150,255,150)
white = (255,255,255)
arr_clr = [red]*80
fps = 60
arr = [0]*80
def generate_arr():
    for i in range(1, 80):
        arr[i]= random.randrange(1, 100)
n = len(arr)
disp = pg.display.set_mode((width,height))
pg.display.set_caption("Sorting Visualization")
clock = pg.time.Clock()
sorted_ = True
generate_arr()
def draw_arr():
    disp.fill((0,0,0))
    for k in range(len(arr)): 
        pg.draw.rect(disp,arr_clr[k],[0+10*k,0,5,7*arr[k]])
    pg.display.update()
    pg.time.delay(10)
while running:
    for event in pg.event.get():
        if event.type == pg.QUIT:
            running = False
        if event.type == pg.KEYDOWN:
            if event.key == pg.K_q:
                running = False
            if event.key == pg.K_RETURN:
                sorted_ = False
            if event.key == pg.K_r:
                generate_arr()
    if not(sorted_):
        for i in range(n):
            arr_clr = [white]*80
            draw_arr()
            for j in range(0, n-i-1):
                arr_clr[j] = red
                arr_clr[j+1] =blue  
                if arr[j] > arr[j+1] : 
                    arr[j], arr[j+1] = arr[j+1], arr[j]
                draw_arr()
        arr_clr = [green]*80
        draw_arr()
    sorted_ = True
    draw_arr()
    clock.tick(1)
    pg.display.update()
pg.quit()
quit()