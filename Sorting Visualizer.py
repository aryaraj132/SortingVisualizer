import pygame as pg
import time
import random 
pg.init()
#Variables
width = 800
height = 700
running = True
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
    for k in range(len(arr)):
        pg.display.update()
        pg.draw.rect(disp,(255,255,255),[0+10*k,0,5,7*arr[k]])
        pg.time.delay(2)
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
                disp.fill((0,0,0)) 
                draw_arr()
    if not(sorted_):
        for i in range(n):
            disp.fill((0,0,0)) 
            for j in range(0, n-i-1):  
                if arr[j] > arr[j+1] : 
                    arr[j], arr[j+1] = arr[j+1], arr[j] 
            draw_arr()
    sorted_ = True
    clock.tick(1)
    pg.display.update()
pg.quit()
quit()