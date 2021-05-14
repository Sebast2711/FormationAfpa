<?php

namespace App\Entity;

use Symfony\Component\Validator\Constraints as Assert;
use Doctrine\ORM\Mapping as ORM;
use Symfony\Component\Serializer\Annotation\Groups;
use App\Repository\ProductRepository;


/**
 * @ORM\Entity(repositoryClass=ProductRepository::class)
 */
class Product
{
    /**
     * @ORM\Id
     * @ORM\GeneratedValue
     * @ORM\Column(type="integer")
     */
    private $id;

    /**
     * @ORM\Column(type="string", length=255)
     * @Groups({"prod_get"})
     * @Assert\NotBlank(message="Veuillez entrer une valeur")
     * @Assert\Length(min=3, minMessage="Veuillez saisir au minimum 3 charactères")
     */
    private $name;

    /**
     * @ORM\Column(type="text")
     * @Groups({"prod_get"})     
     * @Assert\NotBlank(message="Veuillez entrer une valeur")
     * @Assert\Length(min=3, minMessage="Veuillez saisir au minimum 3 charactères")
     */
    private $reference;

    /**
     * @ORM\Column(type="text")
     * @Groups({"prod_get"})
     * @Assert\NotBlank(message="Veuillez entrer une valeur")
     * @Assert\Length(min=5, minMessage="Veuillez saisir au minimum 5 charactères")
     */
    private $description;

    /**
     * @ORM\Column(type="string", length=255)
     * @Groups({"prod_get"})
     * @Assert\NotBlank(message="Veuillez entrer une valeur")
     */
    private $price;

    /**
     * @ORM\Column(type="integer")
     * @Groups({"prod_get"})
     * @Assert\NotBlank(message="Veuillez entrer une valeur")
     */
    private $quantity;

    /**
     * @ORM\Column(type="string", length=255)
     * @Groups({"prod_get"})
     * @Assert\NotBlank(message="Veuillez entrer une valeur")
     */
    private $image;

    /**
     * @Groups({"prod_get"})
     * @ORM\ManyToOne(targetEntity=Category::class, inversedBy="products")
     */
    private $category;

    public function getId(): ?int
    {
        return $this->id;
    }

    public function getName(): ?string
    {
        return $this->name;
    }

    public function setName(string $name): self
    {
        $this->name = $name;

        return $this;
    }

    public function getReference(): ?string
    {
        return $this->reference;
    }

    public function setReference(string $reference): self
    {
        $this->reference = $reference;

        return $this;
    }

    public function getDescription(): ?string
    {
        return $this->description;
    }

    public function setDescription(string $description): self
    {
        $this->description = $description;

        return $this;
    }

    public function getPrice(): ?string
    {
        return $this->price;
    }

    public function setPrice(string $price): self
    {
        $this->price = $price;

        return $this;
    }

    public function getQuantity(): ?int
    {
        return $this->quantity;
    }

    public function setQuantity(int $quantity): self
    {
        $this->quantity = $quantity;

        return $this;
    }

    public function getImage(): ?string
    {
        return $this->image;
    }

    public function setImage(string $image): self
    {
        $this->image = $image;

        return $this;
    }

    public function getCategory(): ?Category
    {
        return $this->category;
    }

    public function setCategory(?Category $category): self
    {
        $this->category = $category;

        return $this;
    }
}
