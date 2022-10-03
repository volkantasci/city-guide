import React from 'react'
import "../styles/BusinessSignUp.css";

export default function BusinessSignUp() {
  return (
    <div className='business-signup-container'>
       <div className='business-signup-background'>
            <svg width="203" height="70" viewBox="0 0 203 70" fill="none" xmlns="http://www.w3.org/2000/svg">
            <g filter="url(#filter0_d_0_1)">
            <path d="M14.7 34.76C11.7 34.76 9.22 33.88 7.26 32.12C5.38 30.36 4.44 28.14 4.44 25.46C4.44 22.7 5.16 19.96 6.6 17.24C8.04 14.52 9.92 12.08 12.24 9.92C13.4 8.84 14.66 7.86 16.02 6.98C17.38 6.06 18.84 5.26 20.4 4.58C22.04 3.82 23.64 3.28 25.2 2.96C26.8 2.6 28.3 2.42 29.7 2.42C32.26 2.42 34.38 2.92 36.06 3.92C36.98 1.76 37.86 0.679999 38.7 0.679999C40.06 0.679999 40.74 0.939999 40.74 1.46C39.78 2.7 39 3.7 38.4 4.46C37.8 5.22 37.4 5.76 37.2 6.08C34.84 9.28 33.66 11.62 33.66 13.1L33.9 14C33.9 14.08 33.86 14.12 33.78 14.12C33.3 14.12 33.06 13.6 33.06 12.56C33.06 10.76 33.86 8.24 35.46 5C34.22 3.88 32.48 3.32 30.24 3.32C26.8 3.32 23.3 4.42 19.74 6.62C16.18 8.78 13.2 11.54 10.8 14.9C9.6 16.54 8.72 18.14 8.16 19.7C7.64 21.22 7.38 22.68 7.38 24.08C7.38 25.84 7.78 27.42 8.58 28.82C9.38 30.22 10.48 31.3 11.88 32.06C13.28 32.86 14.86 33.26 16.62 33.26C19.42 33.26 22.08 32.7 24.6 31.58C27.16 30.42 29.56 28.66 31.8 26.3C32.36 25.74 32.76 25.46 33 25.46C33.16 25.46 33.24 25.58 33.24 25.82C33.24 26.18 33.06 26.56 32.7 26.96C30.58 29.36 27.8 31.26 24.36 32.66C20.88 34.06 17.66 34.76 14.7 34.76ZM42.7017 11.06C41.8217 11.06 41.1017 10.82 40.5417 10.34C41.3017 9.82 42.1017 9.14 42.9417 8.3C43.8217 7.46 44.7217 6.46 45.6417 5.3C45.7217 5.3 45.7617 5.4 45.7617 5.6L45.4617 7.34C45.2617 8.58 44.9017 9.52 44.3817 10.16C43.8617 10.76 43.3017 11.06 42.7017 11.06ZM36.9417 32.9C35.4217 32.9 34.6617 31.8 34.6617 29.6C34.6617 26.28 35.8617 21.9 38.2617 16.46C38.2617 16.3 38.3617 16 38.5617 15.56C38.8017 15.12 38.9817 14.84 39.1017 14.72C39.3817 14.44 39.7617 14.3 40.2417 14.3C41.6417 14.3 42.4017 14.58 42.5217 15.14C41.8817 16.18 41.2617 17.38 40.6617 18.74C40.1017 20.1 39.5417 21.6 38.9817 23.24C38.3817 25 37.9417 26.46 37.6617 27.62C37.4217 28.74 37.3017 29.64 37.3017 30.32C37.3017 31.32 37.5617 31.82 38.0817 31.82C38.4417 31.82 38.9017 31.6 39.4617 31.16C39.9017 30.8 40.2017 30.54 40.3617 30.38C40.5617 30.22 40.7417 30.08 40.9017 29.96C41.0617 29.96 41.1417 30.04 41.1417 30.2C41.1417 30.64 40.5617 31.2 39.4017 31.88C38.2417 32.56 37.4217 32.9 36.9417 32.9ZM45.9595 33.14C44.1995 33.14 43.3195 32.2 43.3195 30.32C43.3195 28.64 43.8795 26.44 44.9995 23.72C45.4395 22.68 45.8795 21.64 46.3195 20.6C46.7595 19.56 47.2595 18.38 47.8195 17.06C46.4595 16.54 45.7795 15.76 45.7795 14.72C45.7795 14.4 45.8595 14.18 46.0195 14.06C46.6195 14.34 47.5395 14.54 48.7795 14.66C50.0995 11.7 50.7595 9.82 50.7595 9.02C50.7595 8.14 50.5995 7.7 50.2795 7.7L49.0795 8C48.9595 8 48.8995 7.94 48.8995 7.82C48.8995 7.5 49.1395 7.26 49.6195 7.1C50.0995 6.9 50.4595 6.8 50.6995 6.8C52.4595 6.8 53.3395 7.8 53.3395 9.8C53.3395 10.96 52.9795 12.48 52.2595 14.36C52.4195 14.52 53.1395 14.6 54.4195 14.6C55.7395 14.6 56.7395 14.46 57.4195 14.18C58.0595 13.86 58.5195 13.7 58.7995 13.7C58.9195 13.7 58.9795 13.74 58.9795 13.82C58.9795 13.94 58.8795 14.1 58.6795 14.3C57.8395 15.02 56.8395 15.64 55.6795 16.16C54.5595 16.68 53.2595 17.04 51.7795 17.24H51.5995C51.5595 17.24 51.4995 17.26 51.4195 17.3C51.3395 17.3 51.1795 17.34 50.9395 17.42C47.2995 24.66 45.4795 29.26 45.4795 31.22C45.4795 31.86 45.7195 32.18 46.1995 32.18L47.8795 31.82L47.9395 31.88C47.9395 32.72 47.2795 33.14 45.9595 33.14ZM48.187 58.76C45.547 58.76 44.227 57.46 44.227 54.86C44.227 51.74 46.487 47.64 51.007 42.56C55.727 37.24 60.867 33 66.427 29.84C66.467 29.84 66.487 29.86 66.487 29.9C66.487 30.1 66.267 30.44 65.827 30.92C52.307 42.16 45.547 50.28 45.547 55.28C45.547 57.2 46.307 58.16 47.827 58.16C50.467 58.16 53.607 55.64 57.247 50.6C59.167 47.96 60.907 45.22 62.467 42.38C64.027 39.54 65.427 36.58 66.667 33.5C67.987 30.3 68.967 27.48 69.607 25.04C70.287 22.6 70.627 20.4 70.627 18.44C70.627 17.04 70.387 16.08 69.907 15.56C64.587 21.12 60.867 25.8 58.747 29.6C58.107 31.28 57.507 32.12 56.947 32.12C55.747 32.12 55.147 31.76 55.147 31.04C55.147 30.8 55.347 30.1 55.747 28.94C56.187 27.74 56.787 26.08 57.547 23.96L59.227 19.34C59.827 17.7 60.127 16.1 60.127 14.54V14.3C60.127 13.82 60.067 13.56 59.947 13.52C59.867 13.44 59.607 13.4 59.167 13.4C58.767 13.4 58.567 13.3 58.567 13.1C58.567 12.74 58.887 12.56 59.527 12.56C62.087 12.56 63.367 13.52 63.367 15.44C63.367 16.36 62.167 19.76 59.767 25.64C61.127 23.72 63.147 21.34 65.827 18.5C68.547 15.62 70.227 14.18 70.867 14.18C70.867 14.5 70.707 14.82 70.387 15.14C72.187 15.3 73.147 15.7 73.267 16.34C73.347 16.86 73.407 17.34 73.447 17.78C73.487 18.22 73.507 18.6 73.507 18.92C73.507 22.76 72.187 27.84 69.547 34.16C66.627 41.04 63.087 46.86 58.927 51.62C54.767 56.38 51.187 58.76 48.187 58.76ZM100.181 44.96C99.4608 44.96 99.1008 44.78 99.1008 44.42C99.1008 44.26 99.3608 44.1 99.8808 43.94C100.801 43.62 101.501 43.34 101.981 43.1C102.501 42.86 102.841 42.7 103.001 42.62C104.601 41.22 106.221 39.12 107.861 36.32C109.501 33.56 111.141 30.12 112.781 26C107.261 31.84 101.561 34.76 95.6808 34.76C92.4808 34.76 89.9408 33.9 88.0608 32.18C86.1808 30.42 85.2408 28.18 85.2408 25.46C85.2408 24.02 85.4208 22.6 85.7808 21.2C86.1808 19.8 86.7008 18.5 87.3408 17.3C88.7808 14.62 90.6408 12.18 92.9208 9.98C95.2408 7.78 97.9608 5.98 101.081 4.58C102.801 3.78 104.461 3.22 106.061 2.9C107.701 2.58 109.201 2.42 110.561 2.42C111.721 2.42 112.781 2.52 113.741 2.72C114.741 2.92 115.601 3.18 116.321 3.5L117.401 1.64C118.041 0.759999 118.841 0.32 119.801 0.32C120.721 0.32 121.181 0.52 121.181 0.92C121.181 0.999999 120.721 1.5 119.801 2.42C119.281 2.94 118.901 3.32 118.661 3.56C118.461 3.76 118.201 4.02 117.881 4.34C118.401 4.66 118.841 5.02 119.201 5.42C119.601 5.78 119.801 6 119.801 6.08C119.801 6.12 119.521 6.46 118.961 7.1C118.441 7.74 117.921 8.4 117.401 9.08C115.961 10.92 115.221 12.1 115.181 12.62L115.361 12.8C115.361 13 115.261 13.1 115.061 13.1C114.461 13.1 114.161 12.5 114.161 11.3C114.161 9.02 114.721 6.74 115.841 4.46C114.361 3.7 112.721 3.32 110.921 3.32C107.321 3.32 103.681 4.46 100.001 6.74C96.4008 8.94 93.4008 11.72 91.0008 15.08C89.8008 16.8 88.9208 18.44 88.3608 20C87.8008 21.56 87.5208 23.04 87.5208 24.44C87.5208 27 88.3808 29.12 90.1008 30.8C91.8608 32.48 94.2208 33.32 97.1808 33.32C101.901 33.32 107.021 30.18 112.541 23.9C113.061 23.34 113.481 22.86 113.801 22.46C114.161 22.02 114.421 21.66 114.581 21.38L115.181 19.64C112.021 20.28 109.441 20.76 107.441 21.08C105.481 21.36 104.101 21.5 103.301 21.5C102.821 21.5 102.381 21.26 101.981 20.78C101.581 20.3 101.381 19.68 101.381 18.92C101.381 18.76 101.461 18.68 101.621 18.68L105.161 19.04C109.721 19.04 113.201 18.92 115.601 18.68C115.841 17.88 116.161 17.48 116.561 17.48C116.761 17.48 117.001 17.56 117.281 17.72C117.561 17.84 117.901 18.02 118.301 18.26L120.101 17.96C120.421 17.96 120.581 18.08 120.581 18.32C120.581 18.52 119.921 18.74 118.601 18.98C115.721 26.26 112.501 32.4 108.941 37.4C105.421 42.44 102.501 44.96 100.181 44.96ZM115.181 10.82C115.501 10.42 115.921 9.84 116.441 9.08C116.961 8.28 117.601 7.3 118.361 6.14L117.701 5.54C116.421 7.58 115.581 9.34 115.181 10.82ZM136.148 32.78C134.988 32.78 134.068 32.24 133.388 31.16C133.108 30.6 132.868 30.02 132.668 29.42C132.508 28.78 132.428 28.04 132.428 27.2C132.428 26.4 132.508 25.48 132.668 24.44C132.868 23.4 133.108 22.22 133.388 20.9C131.828 23.46 130.528 25.54 129.488 27.14C128.448 28.7 127.648 29.82 127.088 30.5C126.088 31.82 125.068 32.48 124.028 32.48C123.028 32.48 122.188 32.12 121.508 31.4C120.868 30.64 120.548 29.82 120.548 28.94C120.548 27.3 121.428 24.54 123.188 20.66C124.948 16.7 125.828 14.68 125.828 14.6L125.288 13.52C125.288 13.4 125.428 13.34 125.708 13.34C126.068 13.34 126.728 13.54 127.688 13.94C128.688 14.34 129.188 14.68 129.188 14.96C128.988 15.36 128.608 16.12 128.048 17.24C127.528 18.32 126.808 19.78 125.888 21.62C124.128 25.34 123.248 27.8 123.248 29C123.248 30.24 123.508 30.86 124.028 30.86C124.668 30.86 125.588 30.14 126.788 28.7C127.428 27.9 128.028 27.1 128.588 26.3C129.148 25.5 129.728 24.62 130.328 23.66L135.368 15.5C135.968 14.54 136.608 14.06 137.288 14.06C138.648 14.06 139.368 14.32 139.448 14.84C139.368 14.76 139.268 14.88 139.148 15.2C138.028 17.24 137.008 19.7 136.088 22.58C135.208 25.38 134.768 27.26 134.768 28.22C134.768 30.66 135.208 31.88 136.088 31.88C136.368 31.88 136.948 31.5 137.827 30.74C137.908 30.74 137.948 30.9 137.948 31.22C137.948 32.26 137.348 32.78 136.148 32.78ZM147.76 11.06C146.88 11.06 146.16 10.82 145.6 10.34C146.36 9.82 147.16 9.14 148 8.3C148.88 7.46 149.78 6.46 150.7 5.3C150.78 5.3 150.82 5.4 150.82 5.6L150.52 7.34C150.32 8.58 149.96 9.52 149.44 10.16C148.92 10.76 148.36 11.06 147.76 11.06ZM142 32.9C140.48 32.9 139.72 31.8 139.72 29.6C139.72 26.28 140.92 21.9 143.32 16.46C143.32 16.3 143.42 16 143.62 15.56C143.86 15.12 144.04 14.84 144.16 14.72C144.44 14.44 144.82 14.3 145.3 14.3C146.7 14.3 147.46 14.58 147.58 15.14C146.94 16.18 146.32 17.38 145.72 18.74C145.16 20.1 144.6 21.6 144.04 23.24C143.44 25 143 26.46 142.72 27.62C142.48 28.74 142.36 29.64 142.36 30.32C142.36 31.32 142.62 31.82 143.14 31.82C143.5 31.82 143.96 31.6 144.52 31.16C144.96 30.8 145.26 30.54 145.42 30.38C145.62 30.22 145.8 30.08 145.96 29.96C146.12 29.96 146.2 30.04 146.2 30.2C146.2 30.64 145.62 31.2 144.46 31.88C143.3 32.56 142.48 32.9 142 32.9ZM161.471 34.22C159.671 34.22 158.771 32.78 158.771 29.9C158.771 28.18 159.411 25.12 160.691 20.72C159.851 22.36 159.031 23.84 158.231 25.16C157.471 26.44 156.651 27.66 155.771 28.82C153.971 31.18 152.431 32.36 151.151 32.36C150.351 32.36 149.531 31.86 148.691 30.86C147.891 29.86 147.491 28.96 147.491 28.16C147.491 25.64 148.831 22.62 151.511 19.1C154.231 15.5 156.651 13.7 158.771 13.7C159.371 13.7 159.991 13.88 160.631 14.24C161.351 14.56 161.711 14.94 161.711 15.38C161.711 15.7 161.531 15.86 161.171 15.86L159.971 15.2C158.611 15.2 156.511 17.22 153.671 21.26C150.871 25.26 149.471 28.08 149.471 29.72C149.471 30.32 149.611 30.62 149.891 30.62C150.291 30.62 151.011 30.18 152.051 29.3C153.091 28.42 154.491 26.96 156.251 24.92C158.051 22.84 159.871 20.48 161.711 17.84C162.191 16.76 162.711 15.52 163.271 14.12C163.871 12.68 164.591 10.96 165.431 8.96C165.471 8.88 165.611 8.52 165.851 7.88C166.131 7.24 166.431 6.52 166.751 5.72C167.111 4.92 167.411 4.22 167.651 3.62C167.891 3.02 168.011 2.7 168.011 2.66C168.011 2.02 167.611 1.7 166.811 1.7L164.771 2.12C164.491 2.12 164.351 2 164.351 1.76C164.351 1.12 165.251 0.799998 167.051 0.799998C169.811 0.799998 171.191 1.74 171.191 3.62C171.191 4.22 169.951 7.06 167.471 12.14C166.151 14.74 165.191 16.68 164.591 17.96C164.031 19.2 163.731 19.86 163.691 19.94C161.571 24.62 160.511 28.34 160.511 31.1C160.511 32.74 160.911 33.56 161.711 33.56L163.511 32.9L163.691 32.96C163.691 33.24 163.391 33.52 162.791 33.8C162.231 34.08 161.791 34.22 161.471 34.22ZM170.632 32.66C167.232 32.66 165.532 31.08 165.532 27.92C165.532 25.48 166.732 22.52 169.132 19.04C171.612 15.56 173.972 13.82 176.212 13.82C177.172 13.82 178.012 14.14 178.732 14.78C179.492 15.38 179.872 16.12 179.872 17C179.872 18.48 178.932 19.98 177.052 21.5C175.212 22.98 173.392 23.72 171.592 23.72C171.232 23.72 171.052 23.64 171.052 23.48L171.232 23.18C175.832 21.74 178.132 19.38 178.132 16.1C178.132 15.62 177.972 15.38 177.652 15.38C177.212 15.38 176.412 15.84 175.252 16.76C174.252 17.56 173.312 18.48 172.432 19.52C171.592 20.56 170.832 21.64 170.152 22.76C168.712 25.2 167.992 27.24 167.992 28.88C167.992 30.48 168.612 31.28 169.852 31.28C171.292 31.28 172.872 30.54 174.592 29.06C175.152 28.54 175.752 27.96 176.392 27.32C177.032 26.64 177.732 25.9 178.492 25.1C179.972 23.5 180.752 22.7 180.832 22.7C181.072 22.7 181.192 22.8 181.192 23C181.192 23.16 181.152 23.32 181.072 23.48C176.872 29.6 173.392 32.66 170.632 32.66Z" fill="white"/>
            </g>
            <g opacity="0.8" filter="url(#filter1_d_0_1)">
            <path d="M143.51 60.02C142.65 60.02 141.78 59.87 140.9 59.57C140.04 59.31 139.61 58.95 139.61 58.49C139.61 58.45 139.63 58.43 139.67 58.43L139.85 58.49C140.31 58.79 140.89 58.94 141.59 58.94C143.29 58.94 144.79 58.53 146.09 57.71C147.37 56.91 148.01 56.13 148.01 55.37C148.01 54.59 147.5 53.95 146.48 53.45C145.92 53.17 145.36 52.97 144.8 52.85C144.26 52.73 143.75 52.67 143.27 52.67C142.47 52.67 141.82 52.78 141.32 53C141.12 52.98 141.02 52.85 141.02 52.61C141.02 52.33 141.23 52.13 141.65 52.01L142.61 51.86C144.83 51.26 146.56 50.49 147.8 49.55C149.04 48.59 149.66 47.52 149.66 46.34C149.66 45.76 149.33 45.29 148.67 44.93C148.01 44.57 147.01 44.39 145.67 44.39C144.35 44.39 143.24 44.51 142.34 44.75C141.9 44.85 141.32 45.02 140.6 45.26C139.9 45.48 139.02 45.77 137.96 46.13C135.94 46.81 134.89 47.15 134.81 47.15C134.47 47.15 134.3 46.91 134.3 46.43C134.3 46.21 134.37 46.07 134.51 46.01C138.27 44.51 141.89 43.76 145.37 43.76C149.39 43.76 151.4 44.74 151.4 46.7C151.4 47.74 150.69 48.79 149.27 49.85C148.57 50.37 147.78 50.82 146.9 51.2C146.04 51.58 145.09 51.9 144.05 52.16C145.59 52.28 146.82 52.67 147.74 53.33C148.66 53.97 149.12 54.85 149.12 55.97C149.12 57.05 148.56 58 147.44 58.82C146.34 59.62 145.03 60.02 143.51 60.02ZM137.06 61.91C136.72 61.91 136.42 61.64 136.16 61.1C135.92 60.56 135.8 59.93 135.8 59.21C135.8 56.59 137.25 52.84 140.15 47.96C140.99 46.38 141.55 45.59 141.83 45.59C142.11 45.59 142.41 45.66 142.73 45.8C143.05 45.92 143.21 46.04 143.21 46.16C143.21 46.18 143.2 46.21 143.18 46.25C138.86 52.51 136.7 57.14 136.7 60.14C136.7 60.52 136.78 60.89 136.94 61.25C137.1 61.61 137.2 61.79 137.24 61.79C137.2 61.87 137.14 61.91 137.06 61.91ZM157.888 59.39C157.308 59.39 156.848 59.12 156.508 58.58C156.368 58.3 156.248 58.01 156.148 57.71C156.068 57.39 156.028 57.02 156.028 56.6C156.028 56.2 156.068 55.74 156.148 55.22C156.248 54.7 156.368 54.11 156.508 53.45C155.728 54.73 155.078 55.77 154.558 56.57C154.038 57.35 153.638 57.91 153.358 58.25C152.858 58.91 152.348 59.24 151.828 59.24C151.328 59.24 150.908 59.06 150.568 58.7C150.248 58.32 150.088 57.91 150.088 57.47C150.088 56.65 150.528 55.27 151.408 53.33C152.288 51.35 152.728 50.34 152.728 50.3L152.458 49.76C152.458 49.7 152.528 49.67 152.668 49.67C152.848 49.67 153.178 49.77 153.658 49.97C154.158 50.17 154.408 50.34 154.408 50.48C154.308 50.68 154.118 51.06 153.838 51.62C153.578 52.16 153.218 52.89 152.758 53.81C151.878 55.67 151.438 56.9 151.438 57.5C151.438 58.12 151.568 58.43 151.828 58.43C152.148 58.43 152.608 58.07 153.208 57.35C153.528 56.95 153.828 56.55 154.108 56.15C154.388 55.75 154.678 55.31 154.978 54.83L157.498 50.75C157.798 50.27 158.118 50.03 158.458 50.03C159.138 50.03 159.498 50.16 159.538 50.42C159.498 50.38 159.448 50.44 159.388 50.6C158.828 51.62 158.318 52.85 157.858 54.29C157.418 55.69 157.198 56.63 157.198 57.11C157.198 58.33 157.418 58.94 157.858 58.94C157.998 58.94 158.288 58.75 158.728 58.37C158.768 58.37 158.788 58.45 158.788 58.61C158.788 59.13 158.488 59.39 157.888 59.39ZM161.055 59.69C160.555 59.69 160.115 59.6 159.735 59.42C159.375 59.24 159.195 59.07 159.195 58.91C161.495 58.43 162.645 57.85 162.645 57.17C162.645 57.03 162.375 56.72 161.835 56.24C160.795 55.32 160.275 54.29 160.275 53.15C160.275 52.33 160.785 51.52 161.805 50.72C162.865 49.88 163.825 49.46 164.685 49.46C164.825 49.46 165.105 49.67 165.525 50.09C165.945 50.51 166.155 50.78 166.155 50.9C166.155 51 166.105 51.05 166.005 51.05C165.785 51.01 165.605 50.98 165.465 50.96C165.325 50.92 165.225 50.9 165.165 50.9C164.265 50.9 163.335 51.23 162.375 51.89C161.435 52.55 160.965 53.22 160.965 53.9C160.965 54.02 161.435 54.63 162.375 55.73C163.315 56.79 163.785 57.52 163.785 57.92C163.785 58.32 163.505 58.71 162.945 59.09C162.645 59.29 162.325 59.44 161.985 59.54C161.665 59.64 161.355 59.69 161.055 59.69ZM169.788 48.53C169.348 48.53 168.988 48.41 168.708 48.17C169.088 47.91 169.488 47.57 169.908 47.15C170.348 46.73 170.798 46.23 171.258 45.65C171.298 45.65 171.318 45.7 171.318 45.8L171.168 46.67C171.068 47.29 170.888 47.76 170.628 48.08C170.368 48.38 170.088 48.53 169.788 48.53ZM166.908 59.45C166.148 59.45 165.768 58.9 165.768 57.8C165.768 56.14 166.368 53.95 167.568 51.23C167.568 51.15 167.618 51 167.718 50.78C167.838 50.56 167.928 50.42 167.988 50.36C168.128 50.22 168.318 50.15 168.558 50.15C169.258 50.15 169.638 50.29 169.698 50.57C169.378 51.09 169.068 51.69 168.768 52.37C168.488 53.05 168.208 53.8 167.928 54.62C167.628 55.5 167.408 56.23 167.268 56.81C167.148 57.37 167.088 57.82 167.088 58.16C167.088 58.66 167.218 58.91 167.478 58.91C167.658 58.91 167.888 58.8 168.168 58.58C168.388 58.4 168.538 58.27 168.618 58.19C168.718 58.11 168.808 58.04 168.888 57.98C168.968 57.98 169.008 58.02 169.008 58.1C169.008 58.32 168.718 58.6 168.138 58.94C167.558 59.28 167.148 59.45 166.908 59.45ZM170.919 59.06C170.719 59.06 170.529 59.01 170.349 58.91C170.169 58.79 170.069 58.67 170.049 58.55C170.049 58.21 170.379 57.01 171.039 54.95C171.699 52.87 172.029 51.31 172.029 50.27C172.029 49.97 171.959 49.8 171.819 49.76C171.679 49.7 171.539 49.68 171.399 49.7C171.259 49.7 171.189 49.65 171.189 49.55C171.189 49.37 171.339 49.28 171.639 49.28C172.979 49.28 173.649 49.83 173.649 50.93C173.649 51.33 173.169 52.96 172.209 55.82C172.649 55.12 173.079 54.48 173.499 53.9C173.939 53.3 174.359 52.75 174.759 52.25C175.579 51.25 176.129 50.75 176.409 50.75C176.409 50.75 176.409 50.76 176.409 50.78C176.429 50.78 176.439 50.79 176.439 50.81C176.439 50.83 176.419 50.88 176.379 50.96C176.359 51.02 176.299 51.11 176.199 51.23C174.039 53.83 172.539 56.07 171.699 57.95L171.429 58.73C171.349 58.95 171.179 59.06 170.919 59.06ZM177.129 59.39C176.549 59.39 176.089 59.12 175.749 58.58C175.429 58.08 175.269 57.33 175.269 56.33C175.269 55.37 175.529 54.08 176.049 52.46C176.569 50.84 177.069 50.03 177.549 50.03H177.699C178.359 50.03 178.709 50.16 178.749 50.42C178.709 50.38 178.659 50.44 178.599 50.6C178.319 51.1 178.049 51.66 177.789 52.28C177.549 52.9 177.319 53.57 177.099 54.29C176.659 55.69 176.439 56.63 176.439 57.11C176.439 58.33 176.659 58.94 177.099 58.94C177.219 58.94 177.389 58.85 177.609 58.67C177.849 58.49 177.959 58.39 177.939 58.37C177.999 58.37 178.029 58.45 178.029 58.61C178.029 59.13 177.729 59.39 177.129 59.39ZM181.019 59.33C179.319 59.33 178.469 58.54 178.469 56.96C178.469 55.74 179.069 54.26 180.269 52.52C181.509 50.78 182.689 49.91 183.809 49.91C184.289 49.91 184.709 50.07 185.069 50.39C185.449 50.69 185.639 51.06 185.639 51.5C185.639 52.24 185.169 52.99 184.229 53.75C183.309 54.49 182.399 54.86 181.499 54.86C181.319 54.86 181.229 54.82 181.229 54.74L181.319 54.59C183.619 53.87 184.769 52.69 184.769 51.05C184.769 50.81 184.689 50.69 184.529 50.69C184.309 50.69 183.909 50.92 183.329 51.38C182.829 51.78 182.359 52.24 181.919 52.76C181.499 53.28 181.119 53.82 180.779 54.38C180.059 55.6 179.699 56.62 179.699 57.44C179.699 58.24 180.009 58.64 180.629 58.64C181.349 58.64 182.139 58.27 182.999 57.53C183.279 57.27 183.579 56.98 183.899 56.66C184.219 56.32 184.569 55.95 184.949 55.55C185.689 54.75 186.079 54.35 186.119 54.35C186.239 54.35 186.299 54.4 186.299 54.5C186.299 54.58 186.279 54.66 186.239 54.74C184.139 57.8 182.399 59.33 181.019 59.33ZM187.246 59.69C186.746 59.69 186.306 59.6 185.926 59.42C185.566 59.24 185.386 59.07 185.386 58.91C187.686 58.43 188.836 57.85 188.836 57.17C188.836 57.03 188.566 56.72 188.026 56.24C186.986 55.32 186.466 54.29 186.466 53.15C186.466 52.33 186.976 51.52 187.996 50.72C189.056 49.88 190.016 49.46 190.876 49.46C191.016 49.46 191.296 49.67 191.716 50.09C192.136 50.51 192.346 50.78 192.346 50.9C192.346 51 192.296 51.05 192.196 51.05C191.976 51.01 191.796 50.98 191.656 50.96C191.516 50.92 191.416 50.9 191.356 50.9C190.456 50.9 189.526 51.23 188.566 51.89C187.626 52.55 187.156 53.22 187.156 53.9C187.156 54.02 187.626 54.63 188.566 55.73C189.506 56.79 189.976 57.52 189.976 57.92C189.976 58.32 189.696 58.71 189.136 59.09C188.836 59.29 188.516 59.44 188.176 59.54C187.856 59.64 187.546 59.69 187.246 59.69ZM193.34 59.69C192.84 59.69 192.4 59.6 192.02 59.42C191.66 59.24 191.48 59.07 191.48 58.91C193.78 58.43 194.93 57.85 194.93 57.17C194.93 57.03 194.66 56.72 194.12 56.24C193.08 55.32 192.56 54.29 192.56 53.15C192.56 52.33 193.07 51.52 194.09 50.72C195.15 49.88 196.11 49.46 196.97 49.46C197.11 49.46 197.39 49.67 197.81 50.09C198.23 50.51 198.44 50.78 198.44 50.9C198.44 51 198.39 51.05 198.29 51.05C198.07 51.01 197.89 50.98 197.75 50.96C197.61 50.92 197.51 50.9 197.45 50.9C196.55 50.9 195.62 51.23 194.66 51.89C193.72 52.55 193.25 53.22 193.25 53.9C193.25 54.02 193.72 54.63 194.66 55.73C195.6 56.79 196.07 57.52 196.07 57.92C196.07 58.32 195.79 58.71 195.23 59.09C194.93 59.29 194.61 59.44 194.27 59.54C193.95 59.64 193.64 59.69 193.34 59.69Z" fill="white"/>
            </g>
            <defs>
            <filter id="filter0_d_0_1" x="0.439941" y="0.320007" width="184.752" height="66.44" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
            <feFlood flood-opacity="0" result="BackgroundImageFix"/>
            <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
            <feOffset dy="4"/>
            <feGaussianBlur stdDeviation="2"/>
            <feComposite in2="hardAlpha" operator="out"/>
            <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"/>
            <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_0_1"/>
            <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_0_1" result="shape"/>
            </filter>
            <filter id="filter1_d_0_1" x="130.3" y="43.76" width="72.1396" height="26.15" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
            <feFlood flood-opacity="0" result="BackgroundImageFix"/>
            <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
            <feOffset dy="4"/>
            <feGaussianBlur stdDeviation="2"/>
            <feComposite in2="hardAlpha" operator="out"/>
            <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"/>
            <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_0_1"/>
            <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_0_1" result="shape"/>
            </filter>
            </defs>
            </svg>
       </div>
        <div className='business-signup-title'>
            Kayıt Ol
        </div>
        <div className='form-input'>
            <input type="text" placeholder='İşletme Unvani' />
        </div>
        <div className='form-input' id="vergi-levhasi-icon">
            <input type="text" placeholder='Vergi Levhası' />
                <svg width="23" height="21" viewBox="0 0 23 21" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M21 5H17.83L16 3H10V5H15.12L16.95 7H21V19H5V10H3V19C3 20.1 3.9 21 5 21H21C22.1 21 23 20.1 23 19V7C23 5.9 22.1 5 21 5ZM8 13C8 15.76 10.24 18 13 18C15.76 18 18 15.76 18 13C18 10.24 15.76 8 13 8C10.24 8 8 10.24 8 13ZM13 10C14.65 10 16 11.35 16 13C16 14.65 14.65 16 13 16C11.35 16 10 14.65 10 13C10 11.35 11.35 10 13 10ZM5 5H8V3H5V0H3V3H0V5H3V8H5V5Z" fill="#2C2E39"/>
                </svg>
        </div>
        <div className='form-input'>
            <input type="text" placeholder='Adres' />
        </div>
        <div className='form-input'>
            <input type="text" placeholder='İsim Soyisim' />
        </div>
        <div className='form-input'>
            <input type="text" placeholder='Telefon' />
        </div>
        <div className='form-input'>
            <input type="text" placeholder='İban No' />
        </div>
        <div className='form-input'>
            <input type="text" placeholder='E-Posta' />
        </div>
        <div className='form-input'>
            <input type="text" placeholder='Şifre Belirle' />
        </div>
        <div className='form-input'>
            <input type="text" placeholder='Şifre Tekrarı' />
        </div>
        <div className='submit'>
           Kaydol
        </div>
    </div>
  )
}
