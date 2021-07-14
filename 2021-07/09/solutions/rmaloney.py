

def threeSum(array):
    array.sort()
    result = []

    for idx, num1 in enumerate(array):
        for idx2 in range(idx + 1, len(array)):
            num2 = array[idx2]
            for idx3 in range(idx2 + 1, len(array)):
                num3 = array[idx3]

                if num1 + num2 + num3 == 0:
                    result.append([num1, num2, num3])
    return result


print(threeSum([-1, 0, 1, 2, -1, -4]))
# [[-1, -1,2],[-1,0,1]]
print(threeSum([-1, 0, 1, 2, 3, -4]))
# [[1, 3, -4], [-1,0,1]]
