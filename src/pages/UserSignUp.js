import React from 'react'
import "../styles/UserSignUp.css";

export default function UserSignUp() {
  return (
    <div className='user-signup-container'>
        <div className='user-signup-background'>
            <svg width="100%" height="905" viewBox="0 0 428 905" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M0 -1.35022H428V905C293.5 720.08 99 943.931 0 822.881V-1.35022Z" fill="url(#paint0_linear_0_1)"/>
                <path d="M0 -5H428V851.471C293.5 666.551 99 972.52 0 851.471V-5Z" fill="#FF8FB9"/>
                <path d="M0 -5H428V851.471C293.5 666.551 99 972.52 0 851.471V-5Z" fill="url(#paint1_linear_0_1)"/>
                <g filter="url(#filter0_d_0_1)">
                <path d="M135.7 79.76C132.7 79.76 130.22 78.88 128.26 77.12C126.38 75.36 125.44 73.14 125.44 70.46C125.44 67.7 126.16 64.96 127.6 62.24C129.04 59.52 130.92 57.08 133.24 54.92C134.4 53.84 135.66 52.86 137.02 51.98C138.38 51.06 139.84 50.26 141.4 49.58C143.04 48.82 144.64 48.28 146.2 47.96C147.8 47.6 149.3 47.42 150.7 47.42C153.26 47.42 155.38 47.92 157.06 48.92C157.98 46.76 158.86 45.68 159.7 45.68C161.06 45.68 161.74 45.94 161.74 46.46C160.78 47.7 160 48.7 159.4 49.46C158.8 50.22 158.4 50.76 158.2 51.08C155.84 54.28 154.66 56.62 154.66 58.1L154.9 59C154.9 59.08 154.86 59.12 154.78 59.12C154.3 59.12 154.06 58.6 154.06 57.56C154.06 55.76 154.86 53.24 156.46 50C155.22 48.88 153.48 48.32 151.24 48.32C147.8 48.32 144.3 49.42 140.74 51.62C137.18 53.78 134.2 56.54 131.8 59.9C130.6 61.54 129.72 63.14 129.16 64.7C128.64 66.22 128.38 67.68 128.38 69.08C128.38 70.84 128.78 72.42 129.58 73.82C130.38 75.22 131.48 76.3 132.88 77.06C134.28 77.86 135.86 78.26 137.62 78.26C140.42 78.26 143.08 77.7 145.6 76.58C148.16 75.42 150.56 73.66 152.8 71.3C153.36 70.74 153.76 70.46 154 70.46C154.16 70.46 154.24 70.58 154.24 70.82C154.24 71.18 154.06 71.56 153.7 71.96C151.58 74.36 148.8 76.26 145.36 77.66C141.88 79.06 138.66 79.76 135.7 79.76ZM163.702 56.06C162.822 56.06 162.102 55.82 161.542 55.34C162.302 54.82 163.102 54.14 163.942 53.3C164.822 52.46 165.722 51.46 166.642 50.3C166.722 50.3 166.762 50.4 166.762 50.6L166.462 52.34C166.262 53.58 165.902 54.52 165.382 55.16C164.862 55.76 164.302 56.06 163.702 56.06ZM157.942 77.9C156.422 77.9 155.662 76.8 155.662 74.6C155.662 71.28 156.862 66.9 159.262 61.46C159.262 61.3 159.362 61 159.562 60.56C159.802 60.12 159.982 59.84 160.102 59.72C160.382 59.44 160.762 59.3 161.242 59.3C162.642 59.3 163.402 59.58 163.522 60.14C162.882 61.18 162.262 62.38 161.662 63.74C161.102 65.1 160.542 66.6 159.982 68.24C159.382 70 158.942 71.46 158.662 72.62C158.422 73.74 158.302 74.64 158.302 75.32C158.302 76.32 158.562 76.82 159.082 76.82C159.442 76.82 159.902 76.6 160.462 76.16C160.902 75.8 161.202 75.54 161.362 75.38C161.562 75.22 161.742 75.08 161.902 74.96C162.062 74.96 162.142 75.04 162.142 75.2C162.142 75.64 161.562 76.2 160.402 76.88C159.242 77.56 158.422 77.9 157.942 77.9ZM166.96 78.14C165.2 78.14 164.32 77.2 164.32 75.32C164.32 73.64 164.88 71.44 166 68.72C166.44 67.68 166.88 66.64 167.32 65.6C167.76 64.56 168.26 63.38 168.82 62.06C167.46 61.54 166.78 60.76 166.78 59.72C166.78 59.4 166.86 59.18 167.02 59.06C167.62 59.34 168.54 59.54 169.78 59.66C171.1 56.7 171.76 54.82 171.76 54.02C171.76 53.14 171.6 52.7 171.28 52.7L170.08 53C169.96 53 169.9 52.94 169.9 52.82C169.9 52.5 170.14 52.26 170.62 52.1C171.1 51.9 171.46 51.8 171.7 51.8C173.46 51.8 174.34 52.8 174.34 54.8C174.34 55.96 173.98 57.48 173.26 59.36C173.42 59.52 174.14 59.6 175.42 59.6C176.74 59.6 177.74 59.46 178.42 59.18C179.06 58.86 179.52 58.7 179.8 58.7C179.92 58.7 179.98 58.74 179.98 58.82C179.98 58.94 179.88 59.1 179.68 59.3C178.84 60.02 177.84 60.64 176.68 61.16C175.56 61.68 174.26 62.04 172.78 62.24H172.6C172.56 62.24 172.5 62.26 172.42 62.3C172.34 62.3 172.18 62.34 171.94 62.42C168.3 69.66 166.48 74.26 166.48 76.22C166.48 76.86 166.72 77.18 167.2 77.18L168.88 76.82L168.94 76.88C168.94 77.72 168.28 78.14 166.96 78.14ZM169.187 103.76C166.547 103.76 165.227 102.46 165.227 99.86C165.227 96.74 167.487 92.64 172.007 87.56C176.727 82.24 181.867 78 187.427 74.84C187.467 74.84 187.487 74.86 187.487 74.9C187.487 75.1 187.267 75.44 186.827 75.92C173.307 87.16 166.547 95.28 166.547 100.28C166.547 102.2 167.307 103.16 168.827 103.16C171.467 103.16 174.607 100.64 178.247 95.6C180.167 92.96 181.907 90.22 183.467 87.38C185.027 84.54 186.427 81.58 187.667 78.5C188.987 75.3 189.967 72.48 190.607 70.04C191.287 67.6 191.627 65.4 191.627 63.44C191.627 62.04 191.387 61.08 190.907 60.56C185.587 66.12 181.867 70.8 179.747 74.6C179.107 76.28 178.507 77.12 177.947 77.12C176.747 77.12 176.147 76.76 176.147 76.04C176.147 75.8 176.347 75.1 176.747 73.94C177.187 72.74 177.787 71.08 178.547 68.96L180.227 64.34C180.827 62.7 181.127 61.1 181.127 59.54V59.3C181.127 58.82 181.067 58.56 180.947 58.52C180.867 58.44 180.607 58.4 180.167 58.4C179.767 58.4 179.567 58.3 179.567 58.1C179.567 57.74 179.887 57.56 180.527 57.56C183.087 57.56 184.367 58.52 184.367 60.44C184.367 61.36 183.167 64.76 180.767 70.64C182.127 68.72 184.147 66.34 186.827 63.5C189.547 60.62 191.227 59.18 191.867 59.18C191.867 59.5 191.707 59.82 191.387 60.14C193.187 60.3 194.147 60.7 194.267 61.34C194.347 61.86 194.407 62.34 194.447 62.78C194.487 63.22 194.507 63.6 194.507 63.92C194.507 67.76 193.187 72.84 190.547 79.16C187.627 86.04 184.087 91.86 179.927 96.62C175.767 101.38 172.187 103.76 169.187 103.76ZM221.181 89.96C220.461 89.96 220.101 89.78 220.101 89.42C220.101 89.26 220.361 89.1 220.881 88.94C221.801 88.62 222.501 88.34 222.981 88.1C223.501 87.86 223.841 87.7 224.001 87.62C225.601 86.22 227.221 84.12 228.861 81.32C230.501 78.56 232.141 75.12 233.781 71C228.261 76.84 222.561 79.76 216.681 79.76C213.481 79.76 210.941 78.9 209.061 77.18C207.181 75.42 206.241 73.18 206.241 70.46C206.241 69.02 206.421 67.6 206.781 66.2C207.181 64.8 207.701 63.5 208.341 62.3C209.781 59.62 211.641 57.18 213.921 54.98C216.241 52.78 218.961 50.98 222.081 49.58C223.801 48.78 225.461 48.22 227.061 47.9C228.701 47.58 230.201 47.42 231.561 47.42C232.721 47.42 233.781 47.52 234.741 47.72C235.741 47.92 236.601 48.18 237.321 48.5L238.401 46.64C239.041 45.76 239.841 45.32 240.801 45.32C241.721 45.32 242.181 45.52 242.181 45.92C242.181 46 241.721 46.5 240.801 47.42C240.281 47.94 239.901 48.32 239.661 48.56C239.461 48.76 239.201 49.02 238.881 49.34C239.401 49.66 239.841 50.02 240.201 50.42C240.601 50.78 240.801 51 240.801 51.08C240.801 51.12 240.521 51.46 239.961 52.1C239.441 52.74 238.921 53.4 238.401 54.08C236.961 55.92 236.221 57.1 236.181 57.62L236.361 57.8C236.361 58 236.261 58.1 236.061 58.1C235.461 58.1 235.161 57.5 235.161 56.3C235.161 54.02 235.721 51.74 236.841 49.46C235.361 48.7 233.721 48.32 231.921 48.32C228.321 48.32 224.681 49.46 221.001 51.74C217.401 53.94 214.401 56.72 212.001 60.08C210.801 61.8 209.921 63.44 209.361 65C208.801 66.56 208.521 68.04 208.521 69.44C208.521 72 209.381 74.12 211.101 75.8C212.861 77.48 215.221 78.32 218.181 78.32C222.901 78.32 228.021 75.18 233.541 68.9C234.061 68.34 234.481 67.86 234.801 67.46C235.161 67.02 235.421 66.66 235.581 66.38L236.181 64.64C233.021 65.28 230.441 65.76 228.441 66.08C226.481 66.36 225.101 66.5 224.301 66.5C223.821 66.5 223.381 66.26 222.981 65.78C222.581 65.3 222.381 64.68 222.381 63.92C222.381 63.76 222.461 63.68 222.621 63.68L226.161 64.04C230.721 64.04 234.201 63.92 236.601 63.68C236.841 62.88 237.161 62.48 237.561 62.48C237.761 62.48 238.001 62.56 238.281 62.72C238.561 62.84 238.901 63.02 239.301 63.26L241.101 62.96C241.421 62.96 241.581 63.08 241.581 63.32C241.581 63.52 240.921 63.74 239.601 63.98C236.721 71.26 233.501 77.4 229.941 82.4C226.421 87.44 223.501 89.96 221.181 89.96ZM236.181 55.82C236.501 55.42 236.921 54.84 237.441 54.08C237.961 53.28 238.601 52.3 239.361 51.14L238.701 50.54C237.421 52.58 236.581 54.34 236.181 55.82ZM257.148 77.78C255.988 77.78 255.068 77.24 254.388 76.16C254.108 75.6 253.868 75.02 253.668 74.42C253.508 73.78 253.428 73.04 253.428 72.2C253.428 71.4 253.508 70.48 253.668 69.44C253.868 68.4 254.108 67.22 254.388 65.9C252.828 68.46 251.528 70.54 250.488 72.14C249.448 73.7 248.648 74.82 248.088 75.5C247.088 76.82 246.068 77.48 245.028 77.48C244.028 77.48 243.188 77.12 242.508 76.4C241.868 75.64 241.548 74.82 241.548 73.94C241.548 72.3 242.428 69.54 244.188 65.66C245.948 61.7 246.828 59.68 246.828 59.6L246.288 58.52C246.288 58.4 246.428 58.34 246.708 58.34C247.068 58.34 247.728 58.54 248.688 58.94C249.688 59.34 250.188 59.68 250.188 59.96C249.988 60.36 249.608 61.12 249.048 62.24C248.528 63.32 247.808 64.78 246.888 66.62C245.128 70.34 244.248 72.8 244.248 74C244.248 75.24 244.508 75.86 245.028 75.86C245.668 75.86 246.588 75.14 247.788 73.7C248.428 72.9 249.028 72.1 249.588 71.3C250.148 70.5 250.728 69.62 251.328 68.66L256.368 60.5C256.968 59.54 257.608 59.06 258.288 59.06C259.648 59.06 260.368 59.32 260.448 59.84C260.368 59.76 260.268 59.88 260.148 60.2C259.028 62.24 258.008 64.7 257.088 67.58C256.208 70.38 255.768 72.26 255.768 73.22C255.768 75.66 256.208 76.88 257.088 76.88C257.368 76.88 257.948 76.5 258.827 75.74C258.908 75.74 258.948 75.9 258.948 76.22C258.948 77.26 258.348 77.78 257.148 77.78ZM268.76 56.06C267.88 56.06 267.16 55.82 266.6 55.34C267.36 54.82 268.16 54.14 269 53.3C269.88 52.46 270.78 51.46 271.7 50.3C271.78 50.3 271.82 50.4 271.82 50.6L271.52 52.34C271.32 53.58 270.96 54.52 270.44 55.16C269.92 55.76 269.36 56.06 268.76 56.06ZM263 77.9C261.48 77.9 260.72 76.8 260.72 74.6C260.72 71.28 261.92 66.9 264.32 61.46C264.32 61.3 264.42 61 264.62 60.56C264.86 60.12 265.04 59.84 265.16 59.72C265.44 59.44 265.82 59.3 266.3 59.3C267.7 59.3 268.46 59.58 268.58 60.14C267.94 61.18 267.32 62.38 266.72 63.74C266.16 65.1 265.6 66.6 265.04 68.24C264.44 70 264 71.46 263.72 72.62C263.48 73.74 263.36 74.64 263.36 75.32C263.36 76.32 263.62 76.82 264.14 76.82C264.5 76.82 264.96 76.6 265.52 76.16C265.96 75.8 266.26 75.54 266.42 75.38C266.62 75.22 266.8 75.08 266.96 74.96C267.12 74.96 267.2 75.04 267.2 75.2C267.2 75.64 266.62 76.2 265.46 76.88C264.3 77.56 263.48 77.9 263 77.9ZM282.471 79.22C280.671 79.22 279.771 77.78 279.771 74.9C279.771 73.18 280.411 70.12 281.691 65.72C280.851 67.36 280.031 68.84 279.231 70.16C278.471 71.44 277.651 72.66 276.771 73.82C274.971 76.18 273.431 77.36 272.151 77.36C271.351 77.36 270.531 76.86 269.691 75.86C268.891 74.86 268.491 73.96 268.491 73.16C268.491 70.64 269.831 67.62 272.511 64.1C275.231 60.5 277.651 58.7 279.771 58.7C280.371 58.7 280.991 58.88 281.631 59.24C282.351 59.56 282.711 59.94 282.711 60.38C282.711 60.7 282.531 60.86 282.171 60.86L280.971 60.2C279.611 60.2 277.511 62.22 274.671 66.26C271.871 70.26 270.471 73.08 270.471 74.72C270.471 75.32 270.611 75.62 270.891 75.62C271.291 75.62 272.011 75.18 273.051 74.3C274.091 73.42 275.491 71.96 277.251 69.92C279.051 67.84 280.871 65.48 282.711 62.84C283.191 61.76 283.711 60.52 284.271 59.12C284.871 57.68 285.591 55.96 286.431 53.96C286.471 53.88 286.611 53.52 286.851 52.88C287.131 52.24 287.431 51.52 287.751 50.72C288.111 49.92 288.411 49.22 288.651 48.62C288.891 48.02 289.011 47.7 289.011 47.66C289.011 47.02 288.611 46.7 287.811 46.7L285.771 47.12C285.491 47.12 285.351 47 285.351 46.76C285.351 46.12 286.251 45.8 288.051 45.8C290.811 45.8 292.191 46.74 292.191 48.62C292.191 49.22 290.951 52.06 288.471 57.14C287.151 59.74 286.191 61.68 285.591 62.96C285.031 64.2 284.731 64.86 284.691 64.94C282.571 69.62 281.511 73.34 281.511 76.1C281.511 77.74 281.911 78.56 282.711 78.56L284.511 77.9L284.691 77.96C284.691 78.24 284.391 78.52 283.791 78.8C283.231 79.08 282.791 79.22 282.471 79.22ZM291.632 77.66C288.232 77.66 286.532 76.08 286.532 72.92C286.532 70.48 287.732 67.52 290.132 64.04C292.612 60.56 294.972 58.82 297.212 58.82C298.172 58.82 299.012 59.14 299.732 59.78C300.492 60.38 300.872 61.12 300.872 62C300.872 63.48 299.932 64.98 298.052 66.5C296.212 67.98 294.392 68.72 292.592 68.72C292.232 68.72 292.052 68.64 292.052 68.48L292.232 68.18C296.832 66.74 299.132 64.38 299.132 61.1C299.132 60.62 298.972 60.38 298.652 60.38C298.212 60.38 297.412 60.84 296.252 61.76C295.252 62.56 294.312 63.48 293.432 64.52C292.592 65.56 291.832 66.64 291.152 67.76C289.712 70.2 288.992 72.24 288.992 73.88C288.992 75.48 289.612 76.28 290.852 76.28C292.292 76.28 293.872 75.54 295.592 74.06C296.152 73.54 296.752 72.96 297.392 72.32C298.032 71.64 298.732 70.9 299.492 70.1C300.972 68.5 301.752 67.7 301.832 67.7C302.072 67.7 302.192 67.8 302.192 68C302.192 68.16 302.152 68.32 302.072 68.48C297.872 74.6 294.392 77.66 291.632 77.66Z" fill="white"/>
                </g>
                <g opacity="0.8" filter="url(#filter1_d_0_1)">
                <path d="M278.11 109.97C277.61 109.97 277.12 109.24 276.64 107.78C276.38 107.02 276.19 106.31 276.07 105.65C275.97 105.01 275.92 104.4 275.92 103.82C275.92 103.28 275.96 102.77 276.04 102.29C276.14 101.79 276.26 101.3 276.4 100.82C274.52 103.12 273.03 104.27 271.93 104.27C271.39 104.27 270.88 103.97 270.4 103.37C269.94 102.79 269.71 102.23 269.71 101.69C269.71 100.99 269.86 100.21 270.16 99.35C270.48 98.47 270.97 97.49 271.63 96.41L274.72 91.4C274.22 91.56 273.67 91.8 273.07 92.12C272.47 92.42 271.92 92.74 271.42 93.08C269.24 94.56 268.16 95.3 268.18 95.3L268.15 95.27L268.21 95.15C268.83 94.37 269.9 93.46 271.42 92.42C272.98 91.34 274.05 90.8 274.63 90.8C274.95 90.8 275.24 90.93 275.5 91.19C275.78 91.43 275.92 91.7 275.92 92C275.92 92.28 275.29 93.43 274.03 95.45C273.41 96.45 272.88 97.32 272.44 98.06C272 98.8 271.67 99.4 271.45 99.86C271.01 100.76 270.79 101.69 270.79 102.65C270.79 102.99 270.93 103.16 271.21 103.16C271.73 103.16 272.84 102.4 274.54 100.88C275.4 100.12 276.11 99.42 276.67 98.78C277.23 98.14 277.66 97.52 277.96 96.92C279.12 94.54 280.32 92.67 281.56 91.31C282.8 89.95 283.91 89.27 284.89 89.27C285.33 89.27 285.55 89.47 285.55 89.87C285.55 90.49 285.16 91.27 284.38 92.21C284.14 92.47 283.92 92.72 283.72 92.96C283.52 93.2 283.28 93.47 283 93.77C282.66 94.13 282.24 94.58 281.74 95.12C281.26 95.64 280.77 96.17 280.27 96.71C279.79 97.25 279.38 97.72 279.04 98.12C278.7 98.5 278.5 98.72 278.44 98.78C278.28 99.04 278.11 99.43 277.93 99.95C277.75 100.47 277.58 101.06 277.42 101.72C277.26 102.42 277.13 103.04 277.03 103.58C276.95 104.1 276.91 104.53 276.91 104.87C276.91 107.29 277.33 108.95 278.17 109.85C278.19 109.85 278.19 109.86 278.17 109.88C278.17 109.92 278.15 109.95 278.11 109.97ZM278.83 97.16C279.57 96.46 280.28 95.74 280.96 95C281.66 94.24 282.35 93.47 283.03 92.69C284.37 91.15 285.04 90.21 285.04 89.87C285.04 89.77 284.98 89.72 284.86 89.72C284.28 89.72 283.33 90.51 282.01 92.09C280.71 93.67 279.64 95.31 278.8 97.01V97.07C278.8 97.11 278.81 97.14 278.83 97.16ZM281.93 104.69C281.43 104.69 280.99 104.6 280.61 104.42C280.25 104.24 280.07 104.07 280.07 103.91C282.37 103.43 283.52 102.85 283.52 102.17C283.52 102.03 283.25 101.72 282.71 101.24C281.67 100.32 281.15 99.29 281.15 98.15C281.15 97.33 281.66 96.52 282.68 95.72C283.74 94.88 284.7 94.46 285.56 94.46C285.7 94.46 285.98 94.67 286.4 95.09C286.82 95.51 287.03 95.78 287.03 95.9C287.03 96 286.98 96.05 286.88 96.05C286.66 96.01 286.48 95.98 286.34 95.96C286.2 95.92 286.1 95.9 286.04 95.9C285.14 95.9 284.21 96.23 283.25 96.89C282.31 97.55 281.84 98.22 281.84 98.9C281.84 99.02 282.31 99.63 283.25 100.73C284.19 101.79 284.66 102.52 284.66 102.92C284.66 103.32 284.38 103.71 283.82 104.09C283.52 104.29 283.2 104.44 282.86 104.54C282.54 104.64 282.23 104.69 281.93 104.69ZM288.593 104.33C286.893 104.33 286.043 103.54 286.043 101.96C286.043 100.74 286.643 99.26 287.843 97.52C289.083 95.78 290.263 94.91 291.383 94.91C291.863 94.91 292.283 95.07 292.643 95.39C293.023 95.69 293.213 96.06 293.213 96.5C293.213 97.24 292.743 97.99 291.803 98.75C290.883 99.49 289.973 99.86 289.073 99.86C288.893 99.86 288.803 99.82 288.803 99.74L288.893 99.59C291.193 98.87 292.343 97.69 292.343 96.05C292.343 95.81 292.263 95.69 292.103 95.69C291.883 95.69 291.483 95.92 290.903 96.38C290.403 96.78 289.933 97.24 289.493 97.76C289.073 98.28 288.693 98.82 288.353 99.38C287.633 100.6 287.273 101.62 287.273 102.44C287.273 103.24 287.583 103.64 288.203 103.64C288.923 103.64 289.713 103.27 290.573 102.53C290.853 102.27 291.153 101.98 291.473 101.66C291.793 101.32 292.143 100.95 292.523 100.55C293.263 99.75 293.653 99.35 293.693 99.35C293.813 99.35 293.873 99.4 293.873 99.5C293.873 99.58 293.853 99.66 293.813 99.74C291.713 102.8 289.973 104.33 288.593 104.33ZM294.695 104.06C294.515 104.06 294.315 104.01 294.095 103.91C293.875 103.81 293.765 103.69 293.765 103.55C293.765 103.21 294.095 102.01 294.755 99.95C295.415 97.87 295.745 96.31 295.745 95.27C295.745 94.95 295.605 94.77 295.325 94.73C295.045 94.69 294.905 94.63 294.905 94.55C294.905 94.37 295.055 94.28 295.355 94.28C296.695 94.28 297.365 94.83 297.365 95.93C297.365 96.25 297.035 97.43 296.375 99.47C297.455 97.71 298.655 96.5 299.975 95.84C300.315 95.12 300.785 94.76 301.385 94.76C301.965 94.76 302.285 94.81 302.345 94.91C302.325 94.89 302.285 94.92 302.225 95C302.165 95.08 302.095 95.17 302.015 95.27C301.695 95.73 301.415 96.18 301.175 96.62C300.935 97.04 300.805 97.37 300.785 97.61C300.785 98.15 300.975 98.48 301.355 98.6C301.395 98.62 301.435 98.63 301.475 98.63C301.535 98.63 301.565 98.65 301.565 98.69C301.565 98.85 301.365 98.93 300.965 98.93C300.585 98.93 300.255 98.78 299.975 98.48C299.815 98.3 299.705 98.11 299.645 97.91C299.585 97.69 299.555 97.48 299.555 97.28C299.555 96.96 299.605 96.67 299.705 96.41C299.205 96.79 298.755 97.19 298.355 97.61C297.955 98.01 297.585 98.41 297.245 98.81C296.605 99.63 296.155 100.36 295.895 101C295.655 101.62 295.485 102.15 295.385 102.59C295.265 103.07 295.165 103.44 295.085 103.7C295.005 103.94 294.875 104.06 294.695 104.06Z" fill="white"/>
                </g>
                <defs>
                <filter id="filter0_d_0_1" x="121.44" y="45.32" width="184.752" height="66.44" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
                <feFlood flood-opacity="0" result="BackgroundImageFix"/>
                <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
                <feOffset dy="4"/>
                <feGaussianBlur stdDeviation="2"/>
                <feComposite in2="hardAlpha" operator="out"/>
                <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"/>
                <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_0_1"/>
                <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_0_1" result="shape"/>
                </filter>
                <filter id="filter1_d_0_1" x="264.15" y="89.27" width="42.1953" height="28.7" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
                <feFlood flood-opacity="0" result="BackgroundImageFix"/>
                <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
                <feOffset dy="4"/>
                <feGaussianBlur stdDeviation="2"/>
                <feComposite in2="hardAlpha" operator="out"/>
                <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"/>
                <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_0_1"/>
                <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_0_1" result="shape"/>
                </filter>
                <linearGradient id="paint0_linear_0_1" x1="214" y1="745.02" x2="422.762" y2="1215.47" gradientUnits="userSpaceOnUse">
                <stop stop-color="#B3124C"/>
                <stop offset="1" stop-color="white" stop-opacity="0.18"/>
                </linearGradient>
                <linearGradient id="paint1_linear_0_1" x1="-20.0625" y1="-81.1156" x2="1049.43" y2="519.425" gradientUnits="userSpaceOnUse">
                <stop offset="0.226791" stop-color="#FF7EAE"/>
                <stop offset="1" stop-color="#FFF1F6" stop-opacity="0"/>
                </linearGradient>
                </defs>
            </svg>
        </div>
        <div className='user-sign-up-title'>
            Kayıt Ol
        </div>
        <div className='user-signup-image'>
            <svg width="38" height="34" viewBox="0 0 38 34" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M30.6666 10.3333V7.00001H27.3333V3.66668H30.6666V0.333344H34V3.66668H37.3333V7.00001H34V10.3333H30.6666ZM3.99996 33.6667C3.08329 33.6667 2.29885 33.3406 1.64663 32.6883C0.993293 32.035 0.666626 31.25 0.666626 30.3333V10.3333C0.666626 9.41668 0.993293 8.63223 1.64663 7.98001C2.29885 7.32668 3.08329 7.00001 3.99996 7.00001H9.24996L12.3333 3.66668H22.3333V7.00001H13.7916L10.75 10.3333H3.99996V30.3333H30.6666V15.3333H34V30.3333C34 31.25 33.6739 32.035 33.0216 32.6883C32.3683 33.3406 31.5833 33.6667 30.6666 33.6667H3.99996ZM17.3333 27.8333C19.4166 27.8333 21.1877 27.1045 22.6466 25.6467C24.1044 24.1878 24.8333 22.4167 24.8333 20.3333C24.8333 18.25 24.1044 16.4789 22.6466 15.02C21.1877 13.5622 19.4166 12.8333 17.3333 12.8333C15.25 12.8333 13.4788 13.5622 12.02 15.02C10.5622 16.4789 9.83329 18.25 9.83329 20.3333C9.83329 22.4167 10.5622 24.1878 12.02 25.6467C13.4788 27.1045 15.25 27.8333 17.3333 27.8333ZM17.3333 24.5C16.1666 24.5 15.1805 24.0972 14.375 23.2917C13.5694 22.4861 13.1666 21.5 13.1666 20.3333C13.1666 19.1667 13.5694 18.1806 14.375 17.375C15.1805 16.5695 16.1666 16.1667 17.3333 16.1667C18.5 16.1667 19.4861 16.5695 20.2916 17.375C21.0972 18.1806 21.5 19.1667 21.5 20.3333C21.5 21.5 21.0972 22.4861 20.2916 23.2917C19.4861 24.0972 18.5 24.5 17.3333 24.5Z" fill="#2C2E39"/>
            </svg>
        </div>
        <div className='form-input'>
            <input type="text" placeholder='İsim Soyisim' />
        </div>
        <div className='form-input'>
            <input type="text" placeholder='E-Posta' />
        </div>
        <div className='form-input'>
            <input type="text" placeholder='Telefon' />
        </div>
        <div className='form-input'>
            <input type="text" placeholder='Şifre Belirleme' />
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