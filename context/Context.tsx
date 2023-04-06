import React, { Dispatch, SetStateAction, createContext, useEffect, useState } from "react";

export const MyContext = createContext(null);
const Context = ({ children }: any) => {
  const brush = [
    "M785.438 11.7188C784.241 11.6903 783.382 11.9558 782.875 12.5625C727.187 17.0177 671.547 22.6776 616.219 30.4688C609.894 31.3594 603.567 32.3396 597.25 33.2812C590.931 34.2231 584.622 35.0924 578.312 36.0938C571.217 37.2198 564.147 38.4947 557.062 39.6875C520.127 45.9063 483.311 52.8438 446.375 59.0625C430.689 61.7035 414.963 64.2006 399.219 66.4688C384.683 68.5628 370.138 70.4953 355.594 72.5312C347.612 73.6486 339.633 74.845 331.656 76C331.23 75.6251 330.835 75.216 330.406 74.8438C325.253 70.3677 320.024 65.9663 314.656 61.75C308.206 56.6836 301.631 51.8157 294.969 47.0312C290.651 43.9303 286.204 40.9783 281.719 38.125C277.487 35.433 273.176 32.8483 268.812 30.375C266.223 28.9072 263.553 27.5815 260.875 26.2812C254.278 23.078 247.138 20.512 239.75 20.1562C231.26 19.7474 223.008 22.3203 215.219 25.4375C203.464 30.1417 192.325 36.6332 180.094 40.0938C156.837 46.6736 133.675 53.4945 110.688 60.9688C78.5046 71.4326 46.6976 82.9724 15.25 95.4688C11.2107 100.433 32.6374 124.56 63.0938 149.344C93.5501 174.128 121.523 190.183 125.562 185.219C164.779 169.629 204.529 155.722 244.812 143.281C248.469 146.235 252.048 149.269 255.781 152.125C261.419 156.437 267.242 160.515 273.094 164.531C277.056 167.251 281.125 169.794 285.219 172.312C289.523 174.96 293.942 177.39 298.469 179.625C303.327 182.023 308.41 184.056 313.75 185.062C317.865 185.838 322.073 185.94 326.25 185.906C331.36 185.865 336.356 185.518 341.375 184.5C348.2 183.116 354.815 180.915 361.562 179.219C364.427 178.499 367.316 177.91 370.219 177.375C404.538 171.051 439.096 166.132 473.656 161.344C485.027 159.768 496.419 158.263 507.781 156.625C523.597 154.345 539.368 151.811 555.125 149.156C592.449 142.868 629.645 135.851 666.969 129.562C673.631 128.44 680.296 127.247 686.969 126.188C693.248 125.19 699.555 124.313 705.844 123.375C712.134 122.437 718.42 121.45 724.719 120.562C779.832 112.798 835.247 107.194 890.719 102.75C894.777 97.8963 873.937 73.7732 844.156 48.875C818.098 27.0891 793.814 11.9177 785.438 11.7188Z",
    "M214.938 9.03125C212.239 9.01461 209.506 9.15309 206.812 9.3125C195.395 9.98824 183.99 12.1078 172.938 15C157.239 19.1081 142.027 24.7736 127.188 31.3125C117.136 35.7417 107.139 40.3943 97.8438 46.2812C84.3816 54.8072 72.1733 65.2985 61.3125 76.9375C51.9328 86.9893 43.4463 97.97 36.75 110C22.1231 136.162 31.4944 169.217 57.6562 183.844C83.8181 198.471 116.873 189.131 131.5 162.969C133.593 159.268 136.463 155.971 139.312 152.844C143.868 147.844 148.975 143.207 154.625 139.469C157.4 137.633 160.394 136.142 163.406 134.719C164.762 145.45 168.407 155.817 174.781 164.625C176.617 167.161 178.702 169.499 180.969 171.656C183.565 174.128 186.415 176.369 189.469 178.25C194.136 181.124 199.139 183.305 204.406 184.812C214.056 187.575 224.208 187.887 234.156 187.094C244.948 186.233 255.606 184.162 266.188 181.938C267.825 181.593 269.461 181.239 271.094 180.875C271.746 180.73 272.43 180.52 273.094 180.438C275.96 180.08 278.789 179.721 281.594 179C285.929 177.885 290.122 176.261 294.219 174.469C299.209 172.285 304.054 169.811 308.875 167.281C316.991 163.023 324.976 158.554 333 154.125C335.667 152.653 338.356 151.177 341.031 149.719C341.428 149.502 341.932 149.299 342.281 149C342.308 148.977 342.219 148.922 342.25 148.906C344.016 148.029 345.957 147.428 347.781 146.688C350.194 145.709 352.596 144.718 355 143.719C362.339 140.667 369.646 137.484 376.906 134.25C396.106 125.698 415.019 116.391 435.219 110.375C450.108 105.94 465.322 102.899 480.594 100.125C494.75 97.5537 508.96 95.2592 523.188 93.125C572.113 85.7861 621.346 80.8033 670.469 75.0312C682.312 73.6396 694.145 72.1764 705.969 70.625C710.648 70.0111 715.333 69.3545 720 68.6562C721.918 68.3693 723.845 68.1456 725.75 67.7812C731.258 66.728 736.282 64.2047 741.562 62.4375C742.483 62.1293 743.443 61.8387 744.406 61.6875C744.77 61.6304 745.043 61.6246 745.375 61.5312C745.447 61.5111 745.663 61.363 745.625 61.2812C745.587 61.2 745.534 61.1455 745.5 61.0625C745.496 61.0527 745.368 60.6443 745.469 60.6875C745.665 60.7718 745.747 61.3097 745.781 61.4688C745.912 62.0865 745.961 62.7131 745.969 63.3438C746.009 66.5331 745.599 69.7191 745.562 72.9062C745.488 79.3262 746.735 85.1501 751.594 89.625C752.674 90.6194 753.86 91.4761 755.125 92.2188C760.256 95.2309 766.314 96.0216 772.156 96.25C775.955 96.3985 779.771 96.4304 783.562 96.125C787.958 95.771 792.316 95.0093 796.625 94.0938C800.75 93.2173 804.849 92.1831 808.969 91.2812C818.594 89.1739 828.224 87.1624 837.781 84.75C849.866 81.6997 861.852 78.2821 873.812 74.7812C859.804 77.1016 845.759 79.2955 831.656 80.9688C821.818 82.136 811.942 82.8804 802.094 83.9375C796.277 84.5619 790.423 85.2095 784.562 85.0938C781.45 85.0323 778.391 84.6528 775.312 84.2188C771.591 83.694 767.607 83.1123 764.25 81.3125C763.725 81.0312 763.214 80.7183 762.75 80.3438C762.165 79.8715 761.653 79.2686 761.312 78.5938C761.253 78.4758 761.292 78.1309 761.281 78C761.263 77.7677 761.201 77.5451 761.188 77.3125C761.141 76.5201 761.263 75.7218 761.344 74.9375C761.417 74.2267 761.537 73.5171 761.656 72.8125C762.127 70.027 762.683 67.247 763 64.4375C763.394 60.9493 763.261 57.3172 762.031 54C759.717 47.7601 753.836 43.6434 747.375 42.6562C742.344 41.8876 737.31 42.9103 732.438 44.125C729.221 44.927 725.933 46.0776 722.594 46.2188C712.872 46.6297 703.104 46.6363 693.375 46.6875C678.753 46.7645 664.122 46.705 649.5 46.5938C601.188 46.226 552.868 45.0968 504.562 46.5C492.883 46.8393 481.199 47.3012 469.531 47.9375C451.697 48.9101 433.87 50.4337 416.281 53.625C407.007 55.3077 397.828 57.3939 388.719 59.8125C377.354 62.8298 366.083 66.262 354.781 69.5C347.208 71.6698 339.628 73.7803 332 75.75C329.083 76.5033 326.144 77.2159 323.219 77.9375C321.444 78.3754 319.684 78.8001 317.938 79.3438C312.828 80.9339 307.811 82.8458 302.812 84.75C297.717 86.6914 292.605 88.6461 287.5 90.5625C281.55 92.7959 275.57 94.959 269.469 96.75C270.053 94.9427 270.687 93.1504 271.188 91.3125C272.934 84.8996 274.312 78.2585 274.531 71.5938C274.942 59.1175 271.949 46.3686 265.219 35.7812C264.191 34.1647 263.124 32.5662 261.938 31.0625C260.587 29.3516 259.154 27.6787 257.625 26.125C256.057 24.5307 254.403 23.0221 252.656 21.625C250.829 20.1635 248.901 18.8168 246.906 17.5938C244.786 16.2938 242.608 15.1214 240.344 14.0938C238.2 13.1207 235.967 12.2926 233.719 11.5938C231.553 10.9206 229.356 10.3796 227.125 9.96875C224.938 9.56591 222.718 9.32468 220.5 9.15625C218.649 9.01568 216.794 9.04269 214.938 9.03125ZM169.938 69.375C170.12 69.4667 170.006 69.7727 170.062 69.9688C170.264 70.663 170.351 71.2985 170.375 72.0312C170.428 73.6326 170.152 75.2195 169.969 76.8125C169.922 76.5361 169.791 76.2772 169.75 76C169.498 74.2981 169.319 72.474 169.5 70.75C169.539 70.3758 169.655 70.1461 169.781 69.8125C169.837 69.6652 169.797 69.3042 169.938 69.375ZM228.938 96.8438C229.425 96.6755 230.184 96.8271 230.656 96.9062C231.023 96.9677 231.389 97.0356 231.75 97.125C232.393 97.2843 232.994 97.6029 233.625 97.8125C232.885 97.7501 232.142 97.7627 231.406 97.6562C230.646 97.5462 229.845 97.44 229.125 97.1562C229.093 97.1437 228.619 96.9536 228.938 96.8438Z",
    "M609.438 5.65625C603 5.65177 596.589 5.85511 590.156 6.0625C586.888 6.16787 583.606 6.19963 580.344 6.4375C561.693 7.79749 543.15 10.0526 524.625 12.5625C517.15 13.5753 509.663 14.58 502.188 15.5938C498.564 16.0852 494.932 16.5105 491.312 17.0312C485.165 17.9155 479.065 18.9729 472.969 20.1562C463.959 21.9051 454.995 23.959 446.062 26.0625C431.614 29.4649 417.214 33.1078 402.906 37.0625C395.946 38.9863 389.012 40.9761 382.062 42.9375C369.863 46.3808 357.711 50.0888 345.594 53.8125C326.246 59.7584 306.973 66.0101 287.875 72.7188C276.358 76.7644 264.892 80.9683 253.594 85.5938C251.02 86.6477 248.419 87.6481 245.906 88.8438C245.528 89.0238 244.903 89.4411 244.5 89.625C243.508 90.0772 242.499 90.4397 241.5 90.875C240.905 91.134 240.318 91.4713 239.719 91.7188C239.667 91.7402 239.614 91.7599 239.562 91.7812C240.195 89.1481 240.673 86.4873 240.844 83.75C241.534 72.6659 237.483 61.8211 228.375 55.0938C219.787 48.7507 209.125 48.14 199.281 51.5938C196.74 52.4854 194.287 53.6194 191.875 54.8125C191.146 55.1729 190.402 55.5505 189.688 55.9375C189.385 56.1013 189.043 56.4074 188.719 56.5312C186.579 57.3474 184.334 57.9177 182.156 58.625C177.219 60.2284 172.314 61.8703 167.406 63.5625C146.356 70.8213 125.767 79.3707 105.812 89.25C91.1503 96.5093 76.799 104.678 63.2812 113.906C47.1913 124.89 33.1309 138.545 18.1562 150.938C34.3724 142.479 49.9967 132.727 66.8438 125.531C72.035 123.314 77.3562 121.352 82.6875 119.5C89.4725 117.143 96.3083 114.901 103.219 112.938C122.255 107.529 141.645 103.475 161.219 100.562C159.873 101.978 158.684 103.491 157.375 104.938C157.316 105.003 157.451 104.775 157.438 104.688C157.432 104.653 157.344 104.703 157.312 104.719C156.777 104.995 156.298 105.491 155.844 105.875C155.218 106.404 154.591 106.935 153.969 107.469C152.016 109.142 150.084 110.829 148.156 112.531C138.559 121.006 128.09 130.484 124.812 143.375C124.45 144.8 124.097 146.23 123.906 147.688C123.678 149.432 123.525 151.21 123.562 152.969C123.609 155.149 123.7 157.337 124.156 159.469C124.728 162.142 125.567 164.791 126.625 167.312C127.485 169.36 128.644 171.266 129.906 173.094C131.116 174.846 132.531 176.459 134 178C135.02 179.069 136.18 179.996 137.344 180.906C144.442 186.458 153.953 188.826 162.781 189.906C170.2 190.814 177.724 190.713 185.156 190.031C191.781 189.423 198.379 188.321 204.844 186.75C207.732 186.048 210.553 185.168 213.406 184.344C213.427 184.338 212.889 184.7 213.062 184.688C214.939 184.55 216.834 184.088 218.688 183.781C221.379 183.335 224.089 182.878 226.781 182.438C235.515 181.009 244.242 179.691 252.969 178.219C258.66 177.258 264.389 176.38 270.031 175.156C271.645 174.806 273.207 174.323 274.812 173.938C277.82 173.215 280.924 172.757 283.969 172.219C299.872 169.409 315.935 167.336 331.969 165.438C363.407 161.714 394.966 158.814 426.562 156.844C448.211 155.494 469.862 154.121 491.562 154.125C497.421 154.126 503.242 154.514 509.094 154.719C521.523 155.153 533.943 155.693 546.375 156.031C556.749 156.314 567.155 156.404 577.531 156.312C581.401 156.278 585.259 156.324 589.125 156.156C599.162 155.721 609.209 155.019 619.219 154.188C622.908 153.881 626.604 153.677 630.281 153.25C633.88 152.832 637.47 152.278 641.062 151.812C644.07 151.423 647.099 151.129 650.094 150.656C653.09 150.183 656.084 149.514 659.062 148.938C663.184 148.14 667.363 147.484 671.438 146.469C673.807 145.878 676.171 145.16 678.531 144.531C682.643 143.436 686.769 142.412 690.844 141.188C693.226 140.472 695.576 139.592 697.938 138.812C702.1 137.439 706.301 136.198 710.438 134.75C715.864 132.851 721.211 130.644 726.594 128.625C737.664 124.473 748.742 120.424 759.938 116.625C762.467 115.767 764.998 114.909 767.531 114.062C769.435 113.426 771.318 112.706 773.25 112.156C776.467 111.242 779.758 110.507 783 109.688C786.577 108.783 790.141 107.766 793.75 107C795.078 106.718 796.47 106.578 797.812 106.375C800.149 106.022 802.476 105.668 804.812 105.312C808.198 104.797 811.595 104.176 815 103.812C819.125 103.372 823.3 103.177 827.438 102.875C830.244 102.67 833.063 102.359 835.875 102.25C839.075 102.126 842.267 102.185 845.469 102.156C849.084 102.124 852.729 102.044 856.344 102.094C858.916 102.129 861.493 102.312 864.062 102.438C868.558 102.658 873.037 102.883 877.531 103.125C888.131 103.925 897.387 96.0059 898.188 85.4062C898.988 74.8066 891.037 65.5502 880.438 64.75C875.899 64.3088 871.353 63.8566 866.812 63.4375C864.215 63.1977 861.621 63.0346 859.031 62.7188C854.65 62.1843 850.251 61.5204 845.875 60.9375C843.364 60.603 840.845 60.3624 838.344 59.9688C834.802 59.4115 831.278 58.638 827.75 58C824.28 57.3726 820.796 56.8394 817.344 56.125C813.907 55.4138 810.511 54.4852 807.094 53.6875C803.409 52.8275 799.646 52.1076 796 51.0938C793.645 50.4388 791.33 49.6133 789 48.875C787.01 48.2443 785.022 47.6306 783.031 47C780.417 46.1715 777.748 45.4592 775.156 44.5625C771.219 43.2002 767.352 41.6157 763.438 40.1875C749.974 35.2752 736.606 30.1169 723.125 25.25C719.361 23.8911 715.628 22.4593 711.844 21.1562C708.084 19.8613 704.193 18.8568 700.375 17.75C696.633 16.6653 692.93 15.4373 689.156 14.4688C685.39 13.502 681.519 12.7954 677.719 11.9688C673.99 11.1574 670.274 10.1762 666.5 9.59375C662.713 9.00924 658.864 8.60717 655.062 8.125C651.927 7.72729 648.803 7.23605 645.656 6.9375C642.533 6.64116 639.382 6.55726 636.25 6.375C632.418 6.15206 628.586 5.89274 624.75 5.75C619.662 5.56064 614.529 5.65979 609.438 5.65625ZM210.406 93.3125C210.655 93.2814 210.993 93.1635 211.25 93.3125C211.421 93.4117 210.975 93.6139 210.781 93.6562C210.514 93.7148 210.242 93.7571 209.969 93.7812C209.348 93.8361 208.743 93.8046 208.125 93.75C208.886 93.5808 209.633 93.4092 210.406 93.3125ZM189.344 162.062C188.984 163.002 188.712 163.982 188.219 164.844C188.034 165.166 187.769 165.563 187.5 165.844C187.432 165.914 187.236 166.034 187.219 165.938C187.128 165.43 187.899 164.338 188.125 163.938C188.491 163.289 188.939 162.689 189.344 162.062Z",
    "M844.094 4.28125C815.42 5.44374 786.708 6.56452 758.094 8.8125C739.663 10.2604 721.305 12.2193 703 14.8125C656.043 21.4648 609.75 31.8371 563.406 41.75C552.386 44.1073 541.362 46.4067 530.312 48.625C514.644 51.7707 498.923 54.6852 483.25 57.8125C440.552 66.3323 397.85 75.3497 354.5 79.9062C345.863 80.8141 337.208 81.4267 328.531 81.875C328.912 79.6815 329.358 77.5008 329.469 75.2812C329.578 73.1032 329.653 70.8961 329.531 68.7188C329.395 66.2795 329.162 63.84 328.719 61.4375C328.211 58.6836 327.56 55.9318 326.656 53.2812C325.607 50.2036 324.394 47.1873 322.875 44.3125C321.337 41.4033 319.537 38.6084 317.531 36C315.526 33.3931 313.29 30.9511 310.875 28.7188C308.494 26.5176 305.883 24.5518 303.188 22.75C300.865 21.1979 298.398 19.8869 295.875 18.6875C293.664 17.6363 291.357 16.7971 289.031 16.0312C286.943 15.3434 284.804 14.8137 282.656 14.3438C280.998 13.981 279.304 13.7769 277.625 13.5312C274.167 13.0253 270.639 12.7769 267.156 12.5C250.969 11.2131 234.706 11.2394 218.5 12.1562C191.526 13.6823 164.765 17.677 138.031 21.4062C129.64 22.5767 121.257 23.7493 112.844 24.75C104.733 25.7147 96.6468 26.6736 88.625 28.25C74.7517 30.9763 61.1407 34.8117 47.3438 37.875C17.5249 44.4728-1.2853 73.9936 5.3125 103.812C11.9103 133.631 41.4311 152.473 71.25 145.875C78.0301 144.38 84.7612 142.732 91.5 141.062C98.1079 139.425 104.736 137.746 111.438 136.531C116.205 135.667 121.004 135.221 125.812 134.656C132.721 133.845 139.638 132.964 146.531 132.031C164.151 129.648 181.719 126.942 199.406 125.094C199.843 125.048 200.282 125.014 200.719 124.969C202.024 135.663 205.683 145.942 211.781 155.156C214.278 158.928 217.158 162.449 220.312 165.688C235.331 181.106 256.464 188.785 277.281 192.375C290.564 194.666 304.047 195.109 317.5 194.969C330.244 194.836 342.981 194.269 355.688 193.281C403.579 189.559 450.819 180.74 497.969 171.875C516.1 168.466 534.285 165.273 552.406 161.812C563.967 159.605 575.499 157.292 587.031 154.938C608.077 150.641 629.088 146.247 650.156 142.062C673.057 137.515 696.055 133.295 719.188 130.094C762.104 124.155 805.41 122.624 848.656 121C880.889 119.741 905.977 92.6076 904.719 60.375C903.46 28.1424 876.326 3.02268 844.094 4.28125Z",
  ];
  const color = ["F4BE1D", "F47321", "F48D20", "399CA3", "57ABAD"];
  // 너무 흰색임 "EEEAEB"
  const [windowHeight, setWindowHeigth] = useState(0);

  function randomBrushType(): string {
    let ranbrushtype = Math.floor(Math.random() * brush.length);
    return brush[ranbrushtype];
  }
  function randomBrushColor(): string {
    let ranbrushcolor = Math.floor(Math.random() * color.length);
    return color[ranbrushcolor];
  }

  const value: any = { randomBrushType, randomBrushColor, windowHeight, setWindowHeigth };
  return <MyContext.Provider value={value}> {children} </MyContext.Provider>;
};

export default Context;
