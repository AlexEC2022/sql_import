UPDATE `oc_product` SET
`quantity` = '0',
`status` = '0'
WHERE `product_id` > 1;

SELECT `model` FROM `oc_product` WHERE `product_id` > 1;