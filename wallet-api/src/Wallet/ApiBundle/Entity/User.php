<?php

namespace Wallet\ApiBundle\Entity;

use Doctrine\ORM\Mapping as ORM;
use Symfony\Component\Validator\Constraints as Assert;

/**
 * User
 *
 * @ORM\Table(name="user")
 * @ORM\Entity(repositoryClass="Wallet\ApiBundle\Repository\UserRepository")
 * @ORM\HasLifecycleCallbacks
 */
class User
{
    /**
     * @var int
     *
     * @ORM\Column(name="id", type="integer")
     * @ORM\Id
     * @ORM\GeneratedValue(strategy="AUTO")
     */
    private $id;

    /**
     * @ORM\Column(type="string", length=255, unique=true)
     * @Assert\NotBlank()
     * @Assert\Email(message="email.error")
     * @Assert\Length(max=255)
     */
    private $email;

    /**
     * @ORM\Column(type="string", length=128)
     * @Assert\NotBlank()
     * @Assert\Length(max=128)
     */
    private $password;

    /**
     * @ORM\Column(type="datetime")
     * @Assert\DateTime
     */
    private $created;

    /**
     * @ORM\Column(type="datetime", nullable=true)
     * @Assert\DateTime
     */
    private $updated;

    /**
     * Encode password
     *
     * @param string $pwd
     *
     * @return bool|string
     */
    public static function cryptPassword($pwd = '')
    {
        return password_hash($pwd, PASSWORD_BCRYPT);
    }

    /**
     * @ORM\PrePersist
     */
    public function prePersist()
    {
        $this->setCreated(new \DateTime());
    }

    /**
     * @ORM\PreUpdate
     */
    public function preUpdate()
    {
        $this->setUpdated(new \DateTime());
    }


    /**
     * Get id
     *
     * @return integer
     */
    public function getId()
    {
        return $this->id;
    }

    /**
     * Set email
     *
     * @param string $email
     *
     * @return User
     */
    public function setEmail($email)
    {
        $this->email = $email;

        return $this;
    }

    /**
     * Get email
     *
     * @return string
     */
    public function getEmail()
    {
        return $this->email;
    }

    /**
     * Set password
     *
     * @param string $password
     *
     * @return User
     */
    public function setPassword($password)
    {
        $this->password = self::cryptPassword($password);

        return $this;
    }

    /**
     * Get password
     *
     * @return string
     */
    public function getPassword()
    {
        return $this->password;
    }

    /**
     * Set created
     *
     * @param \DateTime $created
     *
     * @return User
     */
    public function setCreated($created)
    {
        $this->created = $created;

        return $this;
    }

    /**
     * Get created
     *
     * @return \DateTime
     */
    public function getCreated()
    {
        return $this->created;
    }

    /**
     * Set updated
     *
     * @param \DateTime $updated
     *
     * @return User
     */
    public function setUpdated($updated)
    {
        $this->updated = $updated;

        return $this;
    }

    /**
     * Get updated
     *
     * @return \DateTime
     */
    public function getUpdated()
    {
        return $this->updated;
    }
}
